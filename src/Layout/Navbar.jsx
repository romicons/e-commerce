import { useContext, useState } from 'react';

import { getAuth, signOut } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from '../context/AuthContext';

import { Avatar, Box, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Flex,  Heading, IconButton, Image, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalHeader, ModalOverlay, ModalContent, Spacer, Stack, Text, useDisclosure, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';

import { ShoppingCart } from '../components/ShoppingCart';

import { TbLogin2, TbLogout } from "react-icons/tb";
import { BiSolidHomeHeart } from "react-icons/bi";
import { FiShoppingBag, FiTag } from "react-icons/fi";
import { BsSearchHeart, BsList } from "react-icons/bs";
import { PiCat, PiDog } from "react-icons/pi";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { LiaShoppingCartSolid } from "react-icons/lia";
import logo from '../assets/img/e-commerce-logo.png';


export const Navbar = ({ onToggleColorMode, colorMode }) => {
  const { isOpen: isNavOpen, onOpen: onNavOpen, onClose: onNavClose } = useDisclosure();
  const { isOpen: isCartOpen, onOpen: onCartOpen, onClose: onCartClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const {user} = useContext(AuthContext);

  const itemCount = [];

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
    closeModal();
  };


  const navigate = useNavigate();

  return (
    <Stack position='sticky' top='0' gap={0} zIndex={99}>
      <Flex 
        bg={useColorModeValue("secondary.100", "dark.secondary.100")} 
        align="center" 
        paddingBlock={1} 
        gap={5} 
        paddingInline={2} 
        boxShadow="md"
      >
        <IconButton
          aria-label="Open Menu"
          icon={<BsList />}
          display={['flex', 'flex', 'none']}
          color="primary.600"
          onClick={onNavOpen}
        />
        <Heading as='h1' noOfLines={1} color="primary.600" display="flex" direction="row" alignItems="center">
          <Image
            boxSize='50px'
            objectFit='cover'
            src={logo}
            alt='Pets Go Logo'
          />
          Pets Go
        </Heading>
        <Spacer />
        <Stack direction={['row']} display={['none', 'none', 'flex']} p={1} gap={10}>
          <Link to="/">
            <ChakraLink 
              as={Text} 
              display="flex" 
              alignItems="center" 
              gap="5px" 
              color={useColorModeValue("primary.600", "primary.200")} 
              fontSize={20}
              fontWeight='bold'
              position="relative"
              _hover={{ color: 'secondary.900', _after: { transform: 'scaleX(1)', transformOrigin: 'bottom left' } }}
              _after={{
                content: "''",
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "secondary.900",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              }}
            >
              <BiSolidHomeHeart />
              Home
            </ChakraLink>
          </Link>
          <Link to="/categories">
            <ChakraLink 
              as={Text} 
              display="flex" 
              alignItems="center" 
              gap="5px" 
              color={useColorModeValue("primary.600", "primary.200")} 
              fontSize={20}
              fontWeight='bold'
              position="relative"
              _hover={{ color: 'secondary.900', _after: { transform: 'scaleX(1)', transformOrigin: 'bottom left' } }}
              _after={{
                content: "''",
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "secondary.900",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              }}
            >
              <FiTag />
              Categorías
            </ChakraLink>
          </Link>
          <Link to="/products">
            <ChakraLink 
              as={Text} 
              display="flex" 
              alignItems="center" 
              gap="5px" 
              color={useColorModeValue("primary.600", "primary.200")} 
              fontSize={20} 
              fontWeight='bold'
              position="relative"
              _hover={{ color: 'secondary.900', _after: { transform: 'scaleX(1)', transformOrigin: 'bottom left' } }}
              _after={{
                content: "''",
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "secondary.900",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              }}
            >
              <FiShoppingBag />
              Productos
            </ChakraLink>
          </Link>
        </Stack>

        <Stack direction="row">
          {user ? (
              <Flex align="center" gap={4} w='100%'>
                <Box display='flex' flexDirection='row' gap={2}>
                  <Avatar size="sm" name={user.name} src={user.avatar} />
                  <Text color={useColorModeValue("primary.600", "primary.200")} 
                    fontSize={20} 
                    fontWeight='bold'>
                    {user.name}
                    </Text>
                </Box>
                <Button w='100%'  variant="custom" onClick={openModal} leftIcon={<TbLogout />} fontSize="20px">
                  <Box display={['none', 'none', 'block']}>Cerrar sesión</Box>
                </Button>
              </Flex>
            ) : (
              <Button w='100%' variant="custom" onClick={() => navigate('/login')} leftIcon={<TbLogin2 />} fontSize="20px">
                <Box display={['none', 'none', 'block']}>Iniciar sesión</Box>
              </Button>
            )}
            <IconButton
              aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
              icon={colorMode === 'light' ? <RiMoonClearLine /> : <RiSunLine />}
              onClick={onToggleColorMode}
              color="primary.600"
              borderRadius="50%"
              _hover={{ color: 'secondary.900' }}
            />
        </Stack>
      </Flex>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar cierre de sesión</ModalHeader>
          <ModalBody fontSize='1.2rem' textAlign='center'>¿Estás seguro de que deseas cerrar sesión?</ModalBody>
          <Flex padding={4} justifyContent='center'>
            <Button mr={3} onClick={handleLogout}>
              Confirmar
            </Button>
            <Button variant="custom" onClick={closeModal}>
              Cancelar
            </Button>
          </Flex>

        </ModalContent>
      </Modal>

      <Flex 
        bg='primary.500' 
        align="center" 
        p="2" 
        justifyContent="center" 
        gap="2" 
        boxShadow="md"
      >
        <Button
          variant='custom2'
          borderRadius="50%"
          fontSize="1.5rem"
          bg={colorMode === 'light' ? 'secondary.100' : 'secondary.500'}
          color={colorMode === 'light' ? 'primary.500' : 'primary.600'}
          _hover={{
            color: 'secondary.900'
          }}
        >
          <PiCat aria-label='Cat Filter Icon'/>
        </Button>
        <Button
          variant='custom2'
          borderRadius="50%"
          fontSize="1.5rem"
          bg={colorMode === 'light' ? 'secondary.100' : 'secondary.500'}
          color={colorMode === 'light' ? 'primary.500' : 'primary.600'}
          _hover={{
            color: 'secondary.900'
          }}
        >
          <PiDog aria-label='Dog Filter Icon'/>
        </Button>
        <InputGroup size='md' w="60%">
          <Input
            pr='4.5rem'
            type={'text'}
            placeholder='Buscá tu marca favorita...'
            _placeholder={{ color: '#000000' }}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' variant='custom2'  bg={colorMode === 'light' ? 'secondary.100' : 'secondary.500'}
              color={colorMode === 'light' ? 'primary.500' : 'primary.600'}
              _hover={{
                color: 'secondary.900'
              }} aria-label='Search Button'>
              <BsSearchHeart />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Drawer placement="left" onClose={onNavClose} isOpen={isNavOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={useColorModeValue('primary.600', 'primary.200')} />
          <DrawerHeader display="flex" alignItems="center" gap="2" boxShadow="md" padding="2">
            <Image
              boxSize='50px'
              objectFit='cover'
              src={logo}
              alt='Pets Go Logo'
            />
            <Heading as='h3' color={useColorModeValue("primary.600", "primary.200")}>
              Pets Go
            </Heading>
          </DrawerHeader>
          <DrawerBody paddingTop={5}>
            <Stack spacing="16px">
              <Link to="/" onClick={onNavClose}>
                <ChakraLink 
                  as={Text} 
                  width='50%'
                  display="flex" 
                  alignItems="center"
                  justifyContent='center'
                  margin='0 auto'
                  gap="5px" 
                  color={useColorModeValue("primary.600", "primary.200")} 
                  fontSize={20}
                  fontWeight='bold'
                  position="relative"
                  _hover={{ color: 'secondary.900', _after: { transform: 'scaleX(1)', transformOrigin: 'bottom left' } }}
                  _after={{
                    content: "''",
                    position: "absolute",
                    width: "100%",
                    transform: "scaleX(0)",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "secondary.900",
                    transformOrigin: "bottom right",
                    transition: "transform 0.25s ease-out",
                  }}
                >
                  <BiSolidHomeHeart />
                  Home
                </ChakraLink>
              </Link>
              <Link to="/categories" onClick={onNavClose}>
                <ChakraLink 
                  as={Text} 
                  width='50%'
                  display="flex" 
                  alignItems="center"
                  justifyContent='center'
                  margin='0 auto'
                  gap="5px" 
                  color={useColorModeValue("primary.600", "primary.200")} 
                  fontSize={20}
                  fontWeight='bold'
                  position="relative"
                  _hover={{ color: 'secondary.900', _after: { transform: 'scaleX(1)', transformOrigin: 'bottom left' } }}
                  _after={{
                    content: "''",
                    position: "absolute",
                    width: "100%",
                    transform: "scaleX(0)",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "secondary.900",
                    transformOrigin: "bottom right",
                    transition: "transform 0.25s ease-out",
                  }}
                >
                  <FiTag />
                  Categorías
                </ChakraLink>
              </Link>
              <Link to="/products" onClick={onNavClose}>
                <ChakraLink 
                  as={Text} 
                  width='50%'
                  display="flex" 
                  alignItems="center"
                  justifyContent='center'
                  margin='0 auto'
                  gap="5px" 
                  color={useColorModeValue("primary.600", "primary.200")} 
                  fontSize={20}
                  fontWeight='bold'
                  position="relative"
                  _hover={{ color: 'secondary.900', _after: { transform: 'scaleX(1)', transformOrigin: 'bottom left' } }}
                  _after={{
                    content: "''",
                    position: "absolute",
                    width: "100%",
                    transform: "scaleX(0)",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "secondary.900",
                    transformOrigin: "bottom right",
                    transition: "transform 0.25s ease-out",
                  }}
                >
                  <FiShoppingBag />
                  Productos
                </ChakraLink>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer placement="right" onClose={onCartClose} isOpen={isCartOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            display="flex"
            alignItems="center"
            gap="2"
            boxShadow="md"
            padding="2"
            color="primary.600"
          >
            <LiaShoppingCartSolid fontSize="40px" />
            <Heading as='h3'>
              Mi Carrito
            </Heading>
          </DrawerHeader>
          <DrawerBody paddingTop={5}>
            <Stack spacing="16px">
              {itemCount.length > 0 ? (
                itemCount.map((item) => (
                  <Box key={item.id}>ACA VAN TUS PRODUCTOS</Box>
                ))
              ) : (
                <Text fontSize="xl" textAlign="center">Inicia sesión para comenzar a comprar.</Text>
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <ShoppingCart onClick={onCartOpen} onClose={onCartClose} />
    </Stack>
  );
};
