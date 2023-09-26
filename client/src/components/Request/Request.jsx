import { Box, Container, Heading, VStack , Input , Button ,FormLabel  } from '@chakra-ui/react'

import React, { useState } from 'react'
import {Link} from "react-router-dom";

const Request = () => {
    const [email,setEmail] = useState("")
    const [course,setCourse] = useState("")
    const [name,setName] = useState("")

  return (
    <Container h={`92vh`}>
        <VStack h={`full`} justifyContent={`center`} spacing="16">
            <Heading children="Request New Course"/>
            <form style={{width:`100%`}}>
<Box marginY={`4`}>
<   FormLabel htmlFor="name" children="Name" />
<Input
required id="name"
value={name}
onChange={e=>setName(e.target.value)}
placeholder="abc...."
type={`text`}
focusBorderColor="yellow.500"
/>
</Box>
<Box marginY={`4`}>
<   FormLabel htmlFor="email" children="Email Adress" />
<Input
required id="email"
value={email}
onChange={e=>setEmail(e.target.value)}
placeholder="Email@gmail.com"
type={`email`}
focusBorderColor="yellow.500"
/>

</Box>

<Box marginY={`4`}>
<   FormLabel htmlFor="course" children="Course" />
<Input
required id="course"
value={course}
onChange={e=>setCourse(e.target.value)}
placeholder=" Explain Your Course .... "
type={`text`}
focusBorderColor="yellow.500"
/>

</Box>


<Button my="4" colorScheme={`yellow`} type={`submit`}> Send Mail  </Button>
<Box my={`4`}>
        See Available Courses !{``} <Link to="/courses"><Button colorScheme={`yellow`} variant={`link`}> Click </Button> {""}here</Link>

</Box>




</form>
        </VStack>
    </Container>
  )
}
export default Request
