import React, { useEffect, useState } from 'react';
import { View, Heading, ScrollView } from "@aws-amplify/ui-react";
import UsersTable from "./UsersTable";
import axios from 'axios';

// Define the Farm interface
interface Movement {
  id: number;
  new_originpremid?: string;
  new_destinationpremid?: string;
  new_numitemsmoved: number;
  new_movementreason?: string;
  new_species?: string;
  new_shipmentsstartdate?: string;
}


const Tables = () => {
  const [movements, setMovement] = useState<Movement[]>([]);

  // Add an effect to fetch farm data from your API or mock data
  useEffect(() => {
    // Fetch farm data and set it in the state
    const fetchMovement= async () => {
      try {
        const response = await axios.get('http://localhost:3002/movements'); // Replace with your API endpoint
        setMovement(response.data);
      } catch (error) {
        console.error('Error fetching movements:', error);
      }
    };
    fetchMovement();
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
        <Heading color="#333"> Movements Table </Heading>
        <br></br>
        <ScrollView width="100%">
          <UsersTable movements={movements} />
        </ScrollView>
      </View>
    </>
  );
};

export default Tables;