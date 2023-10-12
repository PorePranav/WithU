import React from 'react';
import { Text, Heading, VStack } from '@chakra-ui/react';

const Fundraiser = () => {
  return (
    <div
      style={{ minHeight: '86vh', display: 'flex', flexDirection: 'column' }}
    >
      <VStack spacing={4} align="center" flex="1">
        <Heading as="h1" size="xl">
          BLOCKCHAIN FUNDRAISER
        </Heading>
        <Text fontSize="lg">
          Your platform for transparent and secure fundraising using blockchain
          technology.
        </Text>
      </VStack>
    </div>
  );
};

export default Fundraiser;
