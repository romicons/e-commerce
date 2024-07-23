

import { Badge, Button, Flex, Heading, Image, Input, InputGroup, InputRightElement, Spacer, Stack } from '@chakra-ui/react'

import { LiaShoppingCartSolid } from "react-icons/lia"
import { TbLogin2 } from "react-icons/tb"
import { BiSolidHomeHeart } from "react-icons/bi";
import { FiShoppingBag, FiTag } from "react-icons/fi";
import { BsSearchHeart } from "react-icons/bs";
import { PiCat, PiDog } from "react-icons/pi";


import logo from '../assets/e-commerce-logo.png'

export const Navbar = () => {
  const itemCount = 0

  return (
    <>
        <Flex bg="white" align="center" p={1}>
        <Heading as='h1' noOfLines={1} color="primary.600" display="flex" direction="row" alignItems="center">
                <Image
                boxSize='60px'
                objectFit='cover'
                src={logo}
                alt='Pets Go Logo'
                />
            PetsGo
        </Heading>
        <Spacer />
        <Stack direction={['column', 'row']} spacing='16px' padding="10px">
            <Button display="flex" align="center" gap="5px" color="primary.600">
                <BiSolidHomeHeart />
                Home
            </Button>
            <Button display="flex" align="center" gap="5px" color="primary.600">
                <FiTag />
                Categorías
            </Button>
            <Button display="flex" align="center" gap="5px" color="primary.600">
                <FiShoppingBag />
                Productos
            </Button>
            <Button display="flex" align="center" gap="5px" color="primary.600">
                <TbLogin2 />
                Iniciar sesión
            </Button>
            <Button position="relative" color="primary.600">
                <LiaShoppingCartSolid fontSize="30px" />
                {itemCount > 0 && (
                    <Badge
                    position="absolute"
                    top="-1"
                    right="-1"
                    colorScheme="red"
                    borderRadius="full"
                    fontSize="0.8em"
                    >
                    {itemCount}
                    </Badge>
                )}
            </Button>
        </Stack>
        </Flex>
        <Flex bg="primary.500" align="center" p="2" justifyContent="center" gap="2">
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
                    _placeholder={{ color: 'inherit' }}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' color="primary.600">
                        <BsSearchHeart />
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Flex>
     </>
  )
}
