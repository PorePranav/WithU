import React from 'react';
import {
  Container,
  Heading,
  Stack,
  VStack,
  Avatar,
  Text,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import IntroVideo from '../../assets/videos/IntroVideo.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import vg from '../../assets/images/lion.png';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        className="vectors-graphics"
        boxSize={'md'}
        src={vg}
        objectFit={`contain`}
      />

      <Text children={'TEAM LIONS '} opacity={`0.75`} />
    </VStack>
    <VStack
      justifyContent="center"
      alignItems={['center', 'flex-start']}
      spacing={4}
    >
      <Heading size="xl">TEAM LIONS</Heading>
      <Text size={{ sm: 'sm', md: 'md' }}>Hi, We Are Team Lions!</Text>
      <Text>
        We are a dynamic group of individuals with a shared mission: to break
        down barriers in education and make quality content accessible to all.
        Our team consists of passionate members, each bringing unique skills and
        perspectives to the table. From coding wizards to database maestros and
        creative front-end developers, we are united by a common goal - to
        empower individuals through education.
      </Text>
      <Heading size="md">
        Our Mission: Unlocking Knowledge, Empowering Futures
      </Heading>
    </VStack>
  </Stack>
);
const TandC = ({ TermsAndCondition }) => (
  <Box>
    <Heading
      size={`md`}
      children="Terms & Condition "
      textAlign={['center', 'left']}
      my={`4`}
    />
    <Box h={`sm`} p="4" overflow={`scroll`}>
      <Text
        textAlign={['Center', 'left']}
        letterSpacing={`widest`}
        fontFamily={`heading`}
      >
        {TermsAndCondition}
      </Text>
      <Heading
        my={`4`}
        size="xs"
        children={`Refund only apllicable for only 7 days `}
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={`container.lg`} padding="16" boxShadow={`lg`}>
      <Heading children="About Us " textAlign={[`center`, `left`]} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={[`center`, `left`]}>
          WithU is more than a project; it's a mission we've undertaken as a
          team to support parents and caregivers of specially-abled children.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            CheckOut OUR Plan
          </Button>
        </Link>
      </Stack>
      <Stack>
        <Box>
          <video
            controls
            controlsList="nodownload nofulscreen noremoteplayback "
            disablePictureInPicture
            disableRemotePlayback
            src={IntroVideo}
          ></video>
        </Box>
      </Stack>
      <TandC TermsAndCondition={`TermsAndCondition`} />
      <HStack my={`4`} p={`4`}>
        <RiSecurePaymentFill />
        <Heading
          size={`xs`}
          fontFamily={`sans-serif`}
          textTransform={`uppercase`}
          children={`Payment is secured by Razorpay `}
        />
      </HStack>
    </Container>
  );
};

export default About;
