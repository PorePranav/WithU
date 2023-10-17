import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
  FormLabel,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  return (
    <Container h={`92vh`}>
      <VStack h={`full`} justifyContent={`center`} spacing="16">
        <Heading children="Contact Us" />
        <form style={{ width: `100%` }}>
          <Box marginY={`4`}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              type={`text`}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={`4`}>
            <FormLabel htmlFor="email" children="Email Adress" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type={`email`}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={`4`}>
            <FormLabel htmlFor="message" children="Message" />
            <Input
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              type={`text`}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my="4" colorScheme={`yellow`} type={`submit`}>
            {' '}
            Send Mail{' '}
          </Button>
          <Box my={`4`}>
            Request for a Course?{``}{' '}
            <Link to="/request">
              <Button colorScheme={`yellow`} variant={`link`}>
                {' '}
                Click{' '}
              </Button>{' '}
              {''}here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
