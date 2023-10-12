import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  return (
    <Container py={`16`} h={`90vh`}>
      <form>
        <Heading
          children="Rest password"
          my="16"
          textTransform={'uppercase'}
          textAlign={[`center`, `left`]}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="new password"
            type={`password`}
            focusBorderColor="yellow.500"
          />
        </VStack>
        <Button type="sumbit" w={`full`} colorScheme={`yellow`}>
          {' '}
          Reset Paaword{' '}
        </Button>
      </form>
    </Container>
  );
};

export default ResetPassword;
