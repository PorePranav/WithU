import {
  Container,
  FormLabel,
  Heading,
  VStack,
  Input,
  Box,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container height={'95vh'}>
      <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={`Welcome to curse bundler `} />
        <form style={{ width: `100%` }}>
          <FormLabel htmlFor="email" children="Email adress" />

          <Box marginY={`4`}>
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email@gmail.com"
              type={`email`}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={`4`}>
            <Input
              required
              id="passord"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your Password..."
              type={`Password`}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
            <Link to="/forgetpassword">
              {' '}
              <Button fontSize={`sm`} variant={`link`}>
                {' '}
                Forget password{' '}
              </Button>{' '}
            </Link>
          </Box>
          <Button my="4" colorScheme={`yellow`} type={`submit`}>
            {' '}
            Login{' '}
          </Button>
          <Box my={`4`}>
            NewUser?{``}{' '}
            <Link to="/register">
              <Button colorScheme={`yellow`} variant={`link`}>
                {' '}
                Sign UP{' '}
              </Button>{' '}
              {''}here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
