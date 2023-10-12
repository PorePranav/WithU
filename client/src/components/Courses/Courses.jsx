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

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  Creator,
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
        <Text children={'WithU'} fontFamily="body" />
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
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log('Added to playlist');
  };

  const categories = ['Deaf', 'Dumb', 'Blind'];

  return (
    <Container minH="95vh" maxW="container.lg" paddingY="8">
      <Heading children="All Courses" m="8" />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course ...."
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
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'For the Deaf'}
          description={'Introductory Course for the Deaf'}
          views={23}
          imageSrc={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBzB3TEZuFslc42wABH0BnoTi3Th0G7Hoyjd8jP73uQcbx4z085xUNxrNCZJGqZ-jULs&usqp=CAU'
          }
          id={'Sample'}
          Creator={'Creator'}
          lectureCount={'2'}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
