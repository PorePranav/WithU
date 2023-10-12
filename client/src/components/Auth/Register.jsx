import {
  Container,
  FormLabel,
  Heading,
  VStack,
  Input,
  Box,
  Button,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const fileUploadCss = {
  cursor: 'pointer',
  marginleft: `-5%`,
  width: `110%`,
  border: `none`,
  height: `100%`,
  color: `#ECC94B`,
  backgroundColor: `white`,
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Container>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Box my={`4`} display={`flex`} justifyContent={`center`}>
          <Avatar src={imagePrev} size={`2xl`} />
        </Box>

        <Heading children={`Regestration `} textTransform={`uppercase`} />
        <form style={{ width: `100%` }}>
          <Box marginY={`4`}>
            <FormLabel htmlFor="email" children="Email adress" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="name"
              type={`text`}
              focusBorderColor="yellow.500"
            />
          </Box>
          <FormLabel htmlFor="email" children="Email Address" />

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
          <FormLabel htmlFor="password" children="Password" />
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
          <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
          <Box marginY={`4`}>
            <FormLabel htmlFor="chooseAvatar" children="CHOOSE AVATAR" />
            <Input
              required
              id="chooseAvatar"
              value={image}
              accept="images/*"
              type={`file`}
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Button my="4" colorScheme={`yellow`} type={`submit`}>
            {' '}
            SignUP{' '}
          </Button>
          <Box my={`4`}>
            AlreadySignup?{``}{' '}
            <Link to="/login">
              <Button colorScheme={`yellow`} variant={`link`}>
                {' '}
                Login here{' '}
              </Button>{' '}
              {''}here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
