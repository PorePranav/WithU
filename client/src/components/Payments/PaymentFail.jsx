import { Container, Heading, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h={`90vh`}>
      <VStack justifyContent={`center`} h={`full`} spacing={`4`}>
        <RiErrorWarningFill size={`5rem`} />
        <Heading my="8" textAlign={`center`} textTransform={`uppercase`}>
          Payment Fail
        </Heading>

        <Link to="/subscribe">
          <Button variant={`ghost`}> Try Again</Button>
        </Link>
        <Heading size={`xs`}>Reference: sadkjautbaiga,sbsbis</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
