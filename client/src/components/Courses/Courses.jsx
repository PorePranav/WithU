import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  Stack,
  VStack,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SingleCourse({
  addToPlaylistHandler,
  title,
  description,
  views,
  imageSrc,
  id,
  creator,
  lectureCount,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      flexWrap="wrap"
      justifyContent={['flex-start', 'space-evenly']}
      alignItems={['center', 'flex-start']}
    >
      <Course
        title={title}
        description={description}
        views={views}
        imageSrc={imageSrc}
        id={id}
        creator={creator}
        lectureCount={lectureCount}
        addToPlaylistHandler={addToPlaylistHandler}
      />
    </Stack>
  );
}

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit="contain" />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily="sans-serif"
        noOfLines={3}
        size="sm"
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text fontWeight="bold" children="Creator: " />
        <Text children={creator} fontFamily="body" />
      </HStack>
      <Heading
        textAlign="center"
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant="ghost"
          colorScheme="yellow"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  let [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log('Added to playlist');
  };

  const categories = ['Deaf', 'Dumb', 'Blind'];
  category ||= 'Deaf';

  return (
    <Container minH="95vh" maxW="container.lg" paddingY="8">
      <Heading children="All Courses" m="8" />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course...."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack overflowX="auto" paddingY="8">
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW="60">
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      {category === 'Deaf' && (
        <SingleCourse
          addToPlaylistHandler={addToPlaylistHandler}
          title={'For the Deaf'}
          description={'Lecture series designed for the deaf'}
          views={23}
          imageSrc={
            'https://www.3playmedia.com/wp-content/uploads/national-deaf-awareness-month-blog-header-1-1400x933.jpg.webp'
          }
          id={'for-the-deaf'}
          creator={'WithU'}
          lectureCount={2}
        />
      )}
      {category === 'Dumb' && (
        <SingleCourse
          addToPlaylistHandler={addToPlaylistHandler}
          title={'For the Dumb'}
          description={'Lecture series designed for the dumb'}
          views={50}
          imageSrc={
            'https://st2.depositphotos.com/47577860/47714/v/450/depositphotos_477148524-stock-illustration-diseases-dumb-mute-icon.jpg'
          }
          id={'for-the-dumb'}
          creator={'WithU'}
          lectureCount={1}
        />
      )}
      {category === 'Blind' && (
        <SingleCourse
          addToPlaylistHandler={addToPlaylistHandler}
          title={'For the Blind'}
          description={'Lecture series designed for the blind'}
          views={21}
          imageSrc={
            'data:image/png;base64,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'
          }
          id={'for-the-blind'}
          creator={'WithU'}
          lectureCount={1}
        />
      )}
    </Container>
  );
};

export default Courses;
