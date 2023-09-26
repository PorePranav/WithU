import { Button, Container, Heading, HStack, Input, Text, Stack, VStack, Image } from '@chakra-ui/react';
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
  lectureCount
}) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit="contain" />
      <Heading textAlign={["center", "left"]} maxW="200px" fontFamily="sans-serif" noOfLines={3} size="sm" children={title} />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text fontWeight="bold" textTransform="uppercase" children="Creator" />
        <Text textTransform="uppercase" children={Creator} fontFamily="body" />
      </HStack>
      <Heading textAlign="center" size="xs" children={`Lectures - ${lectureCount}`} textTransform="uppercase" />
      <Heading size="xs" children={`Views - ${views}`} textTransform="uppercase" />
      <Stack direction={["column", "row"]} alignItems="center">
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
}

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log("Added to playlist");
  };

  const categories = [
    
    "Early Literacy",
    "Math Exploration",
    "Science Introduction",
    "Arts and Crafts",
    "Physical Education",
    "Life Skills Training",
    "Computer Basics",
    "Music and Movement",
    "Sign Language",
    "Sports and Games",
  ];

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
        direction={["column", "row"]}
        flexWrap="wrap"
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Course
          title={"Sample"}
          description={"It is a sample description"}
          views={23}
          imageSrc={"https://www.careersinaudit.com/getasset/45b80f0b-1410-4675-99e6-c6e2885214d4/"}
          id={"Sample"}
          Creator={"Creator name"}
          lectureCount={"2"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
}

export default Courses;
