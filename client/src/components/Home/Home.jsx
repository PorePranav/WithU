import React from 'react';
import {
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './home.css';
import vg from '../../assets/images/bggg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { DiAws } from 'react-icons/di';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import IntroVideo from '../../assets/videos/IntroVideo.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems={['center']}
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={[`center`, `flex-end`]}>
            <Heading children="With-U " size={`2xl`} />

            <Text children="Together, For Your Child's Bright Future " />
            <Link to="/courses">
              <Button size={'lg'} colorScheme={`yellow`}>
                {' '}
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vectors-graphics"
            boxSize={'md'}
            src={vg}
            objectFit={`contain`}
          />
        </Stack>
      </div>

      <Box padding={`8`} bg={`blackAlpha.800`}>
        <Heading
          textAlign={`center`}
          color={`yellow.400`}
          children="Our Brands"
        />
        <HStack
          className="brands"
          justifyContent={`space-evenly`}
          marginTop={`4`}
        >
          <SiCoursera />
          <SiUdemy />
          <CgGoogle />
          <CgYoutube />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          controls
          controlsList="nodownload nofulscreen noremoteplayback "
          disablePictureInPicture
          disableRemotePlayback
          src={IntroVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
