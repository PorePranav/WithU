import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../../src/ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAutheticated = true;

  const user = {
    role: 'admin',
  };

  const logoutHandler = () => {
    console.log(`logout`);
    onClose();
  };

  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme={`yellow`}
        width={`12`}
        height={`12`}
        zIndex={`overlay`}
        rounded={`full `}
        position={`fixed`}
        top={`6`}
        left={`6`}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={`blur(3px)`} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={`1px`}> Course Bundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing={`4`} alignItems={`flex-start`}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title=" Browerse all Courses"
              />
              <LinkButton onClose={onClose} url="/request" title="Request" />
              <LinkButton onClose={onClose} url="/about" title="About" />
              <LinkButton onClose={onClose} url="/contact" title="Contact" />
              <LinkButton onClose={onClose} url="/chatbot" title="CHAT" />

              <LinkButton
                onClose={onClose}
                url="/fundraiser"
                title="Fundraiser"
              />
              <LinkButton
                onClose={onClose}
                url="/testimonials"
                title="Testimonial"
              />

              <HStack
                justifyContent={`space-evenly`}
                position={`absolute`}
                bottom={`2rem`}
                width={`80%`}
              >
                {isAutheticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="profile">
                          <Button colorScheme={`yellow`}>profile </Button>
                        </Link>

                        <p> or </p>
                        <RiLogoutBoxLine />

                        <Button colorScheme={`yellow`} onClick={logoutHandler}>
                          LogOut{' '}
                        </Button>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={`purple`} variant={`ghost`}>
                            <RiDashboardFill style={{ margin: `4px` }} />
                            DashBoard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/Login">
                      <Button colorScheme={`yellow`}>Login</Button>
                    </Link>
                    <p> Or</p>

                    <Link onClick={onClose} to="/Signup">
                      <Button colorScheme={`yellow`}>Signup</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
