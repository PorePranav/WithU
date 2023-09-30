import React from 'react';
import {  Text, Heading, VStack,Button, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Fundraiser = () => {
  return (
    <div style={{ minHeight: '86vh', display: 'flex', flexDirection: 'column' }}>
      <VStack spacing={65} align="center" flex="1">

        <Heading as="h1" size="xl" paddingTop={50} >
          Chat Guidance For Child and Parents
        </Heading>

        <Text fontSize="lg">
          Ask any questions about courses and career guidances need to Your Child
        </Text>

        <Stack direction={["column", "row"]} alignItems="center"  >
        <Link to={`http://127.0.0.1:7860`}>
          <Button colorScheme="yellow" width={200}>CHAT</Button>
        </Link>
      </Stack>
        
      <Text fontSize="lg">
          Here you can ask : 
          <br></br>
          i) Proper career guidances to specially abled childrens. 
          <br></br>
          ii) Parents Consultancy 
          <br></br>
          iii) How to provide proper Education to your children.
        </Text>

        <Text  style={{ color: 'aqua' }} fontSize = '3xl' > 
          !! Click "CHAT" above !!
        </Text>

      </VStack>
      
    </div>
  );
};

export default Fundraiser;

// fontSize="lg"