import { Container, Heading, VStack, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [newemail, setEmail] = useState('');

  return (
    <Container py={`16`} h={'90vh'}>
      <form>
        <Heading
          textTransform={`uppercase`}
          children="Update  Profile"
          my={`16`}
          textAlign={[`center`, `left`]}
        />
        <VStack spacing={`8`}>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder=" Name"
            type={`text`}
            focusBorderColor="yellow.500"
          />
          {''}
          <Input
            value={newemail}
            onChange={e => setEmail(e.target.value)}
            placeholder=" Email"
            type={`text`}
            focusBorderColor="yellow.500"
          />
          <Button w={`full`} colorScheme={`yellow`} type="submit">
            {' '}
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
