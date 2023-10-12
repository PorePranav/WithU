import { Grid, Box, Text, Heading, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import IntroVideo from '../../assets/videos/IntroVideo.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'asdfga',
      title: 'sample1',
      description: 'sample sample he kya he be',
      video: {
        url: 'sass',
      },
    },
    {
      _id: 'asdfga',
      title: 'sample2',
      description: 'sample sample he kya he be',
      video: {
        url: 'sass',
      },
    },
    {
      _id: 'asdfga',
      title: 'sample2',
      description: 'sample sample he kya he be',
      video: {
        url: 'sass',
      },
    },
  ];

  return (
    <Grid h={`110vh`} templateColumns={['1fe', '3fr 1fr']}>
      <Box>
        <video
          width={`100%`}
          controls
          controlsList="nodownload noremoteplayback "
          disablePictureInPicture
          disableRemotePlayback
          src={IntroVideo}
        ></video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />

        <Heading m="4" children="Description" />
        <Text m={`4`} children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderRadius: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
