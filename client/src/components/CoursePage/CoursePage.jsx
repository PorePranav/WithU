import { Grid, Box, Text, Heading, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Dumb1 from '../../assets/videos/dumb1.mp4';
import Dumb2 from '../../assets/videos/dumb2.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: '1',
      title: 'For The Dumb',
      description: 'Letters of English for the dumb Part 1.',
      video: {
        url: Dumb1,
      },
    },
    {
      _id: '2',
      title: 'For The Dumb',
      description: 'Letters of English for the dumb Part 1.',
      video: {
        url: Dumb2,
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
          src={lectures[lectureNumber].video.url}
        ></video>

        <Heading m="4" children={lectures[lectureNumber].title} />
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
