import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

type Farm = {
  id: number;
  premiseid: string;
  total_animal: number;
};

type Movement = {
  id: number;
  new_originpremid: string;
  new_destinationpremid: string;
  new_numitemsmoved: number;
  new_movementreason: string;
  new_species: string;
  new_shipmentsstartdate: string;
};

const Dashboard: React.FC = () => {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [movements, setMovements] = useState<Movement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmsResponse = await axios.get<Farm[]>('http://localhost:3002/farms');
        const movementsResponse = await axios.get<Movement[]>('http://localhost:3002/movements');

        setFarms(farmsResponse.data);
        setMovements(movementsResponse.data);
        setLoading(false);
      } catch (error: any) {
        setError(`Failed to fetch data: ${error.message}`);
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Prepare data for charts
  const farmsChartData = farms.map((farm) => ({
    name: farm.premiseid,
    'Total Animals': farm.total_animal,
  }));

  const movementsChartData = movements.reduce((acc, movement) => {
    const reason = movement.new_movementreason;
    if (!acc[reason]) {
      acc[reason] = 0;
    }
    acc[reason] += movement.new_numitemsmoved;
    return acc;
  }, {} as { [key: string]: number });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


  const movementsByOrigin = movements.reduce((acc, movement) => {
    const origin = movement.new_originpremid;
    if (!acc[origin]) {
      acc[origin] = 0;
    }
    acc[origin] += movement.new_numitemsmoved;
    return acc;
  }, {} as { [key: string]: number });

  const movementsByOriginData = Object.entries(movementsByOrigin).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <ChartContainer>
      <ChartRow>
        <ChartWrapper>
          <h2>Farm Animal Count</h2>
          <BarChart width={500} height={300} data={farmsChartData}>
            <XAxis dataKey="name"  label={{ fontSize: 1}}/>
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Total Animals" fill="#8884d8" />
          </BarChart>
        </ChartWrapper>
        <ChartWrapper>
          <h2>Movements by Reason</h2>
          <PieChart width={500} height={300}>
                  <Pie
          data={Object.entries(movementsChartData).map(([name, value], index) => ({
            name,
            value,
            fill: COLORS[index % COLORS.length],
          }))}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {Object.entries(movementsChartData).map(([_name, _value], index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ChartWrapper>
      </ChartRow>
      <ChartRow>
        <ChartWrapper>
          <h2>Movement Count by Origin</h2>
          <BarChart width={500} height={300} data={movementsByOriginData}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ChartWrapper>

        <ChartWrapper>
          <h2>Movement Trend</h2>
          <LineChart width={500} height={300} data={movements.map((movement) => ({
            name: movement.new_movementreason,
            value: movement.new_numitemsmoved,
            date: movement.new_shipmentsstartdate,
          }))}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ChartWrapper>
      </ChartRow>
    </ChartContainer>
  );
  
};

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChartRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const ChartWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 4px;
`;

export default Dashboard;