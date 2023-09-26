import { Box, Stack, VStack , Heading, HStack } from '@chakra-ui/react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from "react-icons/ti";
import {DiGithub} from "react-icons/di"
import React from 'react'

const Footer = () => {
  return (
    <Box padding={`4`} bg="blackAlpha.900" minH={`10vh`}>

      <Stack direction={["column","row"]}>
        <VStack alignItems={["center","flex-start"]} width="full">
          <Heading children="All rights reserved" color={`white`}/>
          <Heading children="TEAM LIONS" color={`yellow.400`} fontFamily={`body`} size="sm"/>

        </VStack>
        <HStack spacing={["2","10"]} justifyContent="center" color={`white`} fontSize={`50px`} >
          <a href="https://www.youtube.com/channel/UCUhyF2RrSkVmZWpkV-pnY5w" target={`_blank`}><TiSocialYoutubeCircular/> </a>
          <a href="https://www.youtube.com/channel/UCUhyF2RrSkVmZWpkV-pnY5w" target={`_blank`}><TiSocialInstagramCircular/> </a>

          <a href="https://www.youtube.com/channel/UCUhyF2RrSkVmZWpkV-pnY5w" target={`_blank`}><DiGithub/> </a>


        </HStack>

      </Stack>

    </Box>
  )
}

export default Footer
