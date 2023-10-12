import React from 'react';
import { Text, Heading, VStack } from '@chakra-ui/react';

const Testimonials = () => {
  return (
    <div
      style={{ minHeight: '86vh', display: 'flex', flexDirection: 'column' }}
    >
      <VStack spacing={4} align="center" flex="1">
        <Heading as="h1" size="xl">
          Testimonials
        </Heading>
        <Text fontSize="lg">
          Hear from our users about their experiences with Testimonials .
        </Text>
      </VStack>
    </div>
  );
};

export default Testimonials;
