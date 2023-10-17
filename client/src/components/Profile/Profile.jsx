import {
  Container,
  Heading,
  Stack,
  VStack,
  Avatar,
  Button,
  HStack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useDisclosure,
  ModalHeader,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Register';

const Profile = () => {
  const user = {
    name: 'Amitansu',
    email: 'amitansu@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'abcd',
        poster:
          'https://w0.peakpx.com/wallpaper/759/390/HD-wallpaper-itachi-uchiha-kakashi-madara-mangekyo-sharingan-minato-sharingan.jpg',
      },
    ],
  };

  const removeFromPlaylistHandler = id => {
    console.log(id);
  };
  const changeImageHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container minH={`100vh`} maxW={`container.lg`} py="8">
      <Heading children="Profile" m="8" />

      <Stack
        justifyContent={`flex-start`}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding="8"
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme={`yellow`} variant="ghost">
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={`4`} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children={`Name:`} fontWeight={`bold`} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children={`Email:`} fontWeight={`bold`} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children={`Created On:`} fontWeight={`bold`} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={`bold`} />
              {user.subscription.status === 'active' ? (
                <Button color={`yellow.500`}> Cancel The Subscription</Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={`yellow`}> Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button> Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button> Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children={`Your Playlists`} size={`md`} my="8" />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={`wrap`}
          p={`4`}
        >
          {user.playlist.map(element => (
            <VStack w={`48`} m={`2`} key={element.course}>
              <Image
                boxSize={`full`}
                objectFit={`contain`}
                src={element.poster}
              />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={`ghost`} colorScheme={`yellow`}>
                    {' '}
                    Watch Now{' '}
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox
        changeImageSumbitHandler={changeImageHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSumbitHandler }) {
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const closeHandler = () => {
    onClose();
    setImage('');
    setImage('');
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={`blur(10px)`} />
      <ModalContent>
        <ModalHeader children={`Change Photo`} />
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSumbitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={`48`} />}

                <Input
                  type={'file'}
                  css={{
                    '&:: file-selector-button': fileUploadCss,
                  }}
                  onChange={changeImage}
                />

                <Button width={`full`} type={`submit`} colorScheme={`yellow`}>
                  {' '}
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalBody>
          <ModalFooter>
            <Button onClick={closeHandler} mr="3">
              {' '}
              Cancel
            </Button>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
