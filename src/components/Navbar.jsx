import { useState } from 'react';

import { Avatar, Box, Button, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Flex, Heading, IconButton, Image, Input, InputGroup, InputRightElement, Spacer, Stack, Text, useDisclosure } from '@chakra-ui/react';

import { TbLogin2 } from "react-icons/tb";
import { BiSolidHomeHeart } from "react-icons/bi";
import { FiShoppingBag, FiTag } from "react-icons/fi";
import { BsSearchHeart, BsList } from "react-icons/bs";
import { PiCat, PiDog } from "react-icons/pi";
import { RiMoonClearLine } from "react-icons/ri";
import { LiaShoppingCartSolid } from "react-icons/lia";

import logo from '../assets/e-commerce-logo.png';
import { ShoppingCart } from './ShoppingCart';

export const Navbar = () => {
  const { isOpen: isNavOpen, onOpen: onNavOpen, onClose: onNavClose } = useDisclosure();
  const { isOpen: isCartOpen, onOpen: onCartOpen, onClose: onCartClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const itemCount = [];

  return (
    <>
      <Flex bg="white" align="center" paddingBlock={1} gap={1} paddingInline={2} boxShadow="md">
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
        <Stack direction={['row']} display={['none', 'none', 'flex']} p={1}>
          <Button display="flex" align="center" gap="5px" color="primary.600" fontSize={20}>
            <BiSolidHomeHeart />
            Home
          </Button>
          <Button display="flex" align="center" gap="5px" color="primary.600" fontSize={20}>
            <FiTag />
            Categorías
          </Button>
          <Button display="flex" align="center" gap="5px" color="primary.600" fontSize={20}>
            <FiShoppingBag />
            Productos
          </Button>
        </Stack>
        <Stack direction="row">
          <Button display="flex" align="center" gap={1} color="primary.600" fontSize={20} p={2}>
            {isLoggedIn ? (
              <Avatar size="sm" name="Usuario" src="ruta/al/avatar.png" />
            ) : (
              <>
                <TbLogin2 />
                <Box display={['none', 'none', 'block']}>Iniciar sesión</Box>
              </>
            )}
          </Button>
          <Button position="relative" color="primary.600" borderRadius="50%">
            <RiMoonClearLine />
          </Button>
        </Stack>
      </Flex>

      <Drawer placement="left" onClose={onNavClose} isOpen={isNavOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            display="flex"
            alignItems="center"
            gap="2"
            boxShadow="md"
            padding="2"
          >
            <Image
              boxSize='50px'
              objectFit='cover'
              src={logo}
              alt='Pets Go Logo'
            />
            <Heading as='h3' color="primary.600">
              Pets Go
            </Heading>
          </DrawerHeader>
          <DrawerBody paddingTop={5}>
            <Stack spacing="16px">
              <Button display="flex" align="center" gap="5px" color="primary.600" fontSize={20} onClick={onNavClose}>
                <BiSolidHomeHeart />
                Home
              </Button>
              <Button display="flex" align="center" gap="5px" color="primary.600" fontSize={20} onClick={onNavClose}>
                <FiTag />
                Categorías
              </Button>
              <Button display="flex" align="center" gap="5px" color="primary.600" fontSize={20} onClick={onNavClose}>
                <FiShoppingBag />
                Productos
              </Button>
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
                <Text fontSize="xl" textAlign="center">¡Tu carrito esta vacío! Añade algunos productos para comenzar.</Text>
              )}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex bg="primary.500" align="center" p="2" justifyContent="center" gap="2" boxShadow="md">
        <Button color="primary.600" borderRadius="50%" fontSize="1.5rem">
          <PiCat />
        </Button>
        <Button color="primary.600" borderRadius="50%" fontSize="1.5rem">
          <PiDog />
        </Button>
        <InputGroup size='md' w="60%">
          <Input
            pr='4.5rem'
            type={'text'}
            placeholder='Buscá tu marca favorita...'
            _placeholder={{ color: '#000000' }}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' color="primary.600">
              <BsSearchHeart />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>

      <ShoppingCart itemCount={itemCount.length} onClick={onCartOpen}/>
    </>
  );
};
