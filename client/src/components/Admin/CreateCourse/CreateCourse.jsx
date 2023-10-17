import {
  Container,
  Grid,
  Heading,
  Input,
  VStack,
  Select,
  Image,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Auth/Register';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const categories = ['Deaf', 'Dumb', 'Blind'];

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <Grid
      css={{
        cursor: `url(${Cursor}), default`,
      }}
      minH={`100vh`}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Container py={'16'}>
        <form>
          <Heading
            children="Create Course "
            my={'16'}
            textAlign={[`center`, `left`]}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder=" Title"
              type={`text`}
            ></Input>
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              type={'text'}
            />
            <Input
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              type={'text'}
            />
            <Select
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Category</option>

              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>

            <Input
              accept="image/*"
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                },
              }}
              onChange={changeImageHandler}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize="64" objectFit={'contain'} />
            )}
            <Button w="full" type="submit">
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
