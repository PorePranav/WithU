import { Container, Heading, VStack,Input, Button } from '@chakra-ui/react'
import React ,{useState} from 'react'


const ChangePassword = () => {
    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");



  return (
  <Container py={`16`} h={'90vh'}>
    <form>
        <Heading  textTransform={`uppercase`} children="Change Password" my={`16`} textAlign={[`center`,`left`]}/>
        <VStack spacing={`8`}>
        <Input

         required id="passord"
           value={oldPassword}
          onChange={e=>setOldPassword(e.target.value)}
         placeholder=" Old Password..."
         type={`Password`}
         focusBorderColor="yellow.500"
          />
           <Input

          required id="passord"
        value={newPassword}
         onChange={e=>setNewPassword(e.target.value)}
        placeholder=" New Password..."
         type={`Password`}
          focusBorderColor="yellow.500"
 /> 
       <Button w={`full`} colorScheme={`yellow`} type="submit" > Change</Button>

        </VStack>
    </form>

  </Container>
  )
}

export default ChangePassword
