import React, { useEffect, useState } from 'react';
import { View, Heading, ScrollView } from "@aws-amplify/ui-react";
import BasicTable from "./BasicTable";
import axios from 'axios';

// Define the Farm interface
interface Farm {
  id: number;
  premiseid: string;
  total_animal: number;
}



const Tables = () => {
  const [farms, setFarms] = useState<Farm[]>([]);

  // Add an effect to fetch farm data from your API or mock data
  useEffect(() => {
    // Fetch farm data and set it in the state
    const fetchFarms = async () => {
      try {
        const response = await axios.get('http://localhost:3002/farms'); // Replace with your API endpoint
        setFarms(response.data);
      } catch (error) {
        console.error('Error fetching farms:', error);
      }
    };
    fetchFarms();
  }, []);

  return (
    <>
      <div>
        <h2>Tables</h2>
      </div>
      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="1rem"
        minHeight="80vh"
      >
        <Heading color="#333"> Basic Table </Heading>
        <br></br>
        <ScrollView width="100%">
          <BasicTable farms={farms} />
        </ScrollView>
      </View>
    </>
  );
};

export default Tables;