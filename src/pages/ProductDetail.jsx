import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ProductsContext } from '../context/ProductsContext';

import { useParams, useNavigate } from 'react-router-dom';

import { Box, Button, Flex, Heading, HStack, Image, Input, Text, VStack, useColorModeValue, useNumberInput, useToast } from "@chakra-ui/react";

import { IoArrowBackOutline } from "react-icons/io5";

export const ProductDetail = () => {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const { productsArray } = useContext(ProductsContext);
    const { user, addToCart } = useContext(AuthContext);
    const toast = useToast();

    const product = productsArray.find((product) => product.id === id && product.category === category);

    const inputBgColor = useColorModeValue('secondary.100', 'rgba(255, 255, 255, 0.08)');
    const bgColor = useColorModeValue('gray.100', 'rgba(255, 255, 255, 0.08)');

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
        step: 1,
        min: 1,
        max: product?.stock || 1,
        defaultValue: 1,
    });

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();

    const handleAddToCart = () => {
        const quantity = Number(input.value);
        if (!user) {
            navigate('/login');
        } else if (product && product.stock >= quantity) {
            addToCart({ ...product, quantity });
            toast({
                title: "Producto añadido al carrito.",
                description: `${product.name} se ha añadido con éxito.`,
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
        }
    };

    if (!product) {
        return <Text>Producto no encontrado</Text>;
    }

    return (
        <VStack paddingBlock={6} spacing={4} w="100%">
            <Flex width="100%" justifyContent="flex-start" paddingLeft={5}>
                <Button gap={1} variant='custom' onClick={() => navigate(-1)}>
                    <IoArrowBackOutline />
                    Regresar
                </Button>
            </Flex>
            <Box bg={bgColor} padding={4} gap={2} boxShadow="md" w={{ base: '90%', md: '80%' }} borderRadius='lg'>
                <Heading as="h2" fontSize='1.5rem' textAlign="center" mb={4}>
                    {product.name}
                </Heading>
                
                <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
                    <Image src={product.img} alt={product.name} boxSize="300px" objectFit="contain" p={5} />
                    
                    <VStack align="flex-start" spacing={4} width={{ base: "100%", md: "70%" }}>
                        <Text textAlign='justify' paddingBlock={2}>
                            {product.longDescription}
                        </Text>
                        <Text fontSize='1.2rem'>
                            Precio: $ {product.price}
                        </Text>

                        <Flex 
                            direction={{ base: 'column', md: 'row' }} 
                            alignItems="center" 
                            justifyContent={{ base: 'center', md: 'flex-start' }}
                            gap={4}
                            width='100%'
                        >
                            <Text fontSize='1.2rem'>Disponibles: {product.stock}</Text>
                            <HStack maxW='160px'>
                                <Button {...dec} variant='custom'>-</Button>
                                <Input {...input} textAlign="center" bg={inputBgColor} />
                                <Button {...inc} variant='custom'>+</Button>
                            </HStack>
                        </Flex>
                    </VStack>
                </Flex>

                <Box width="100%" textAlign="center" mt={4}>
                    <Button variant='custom' gap={1} onClick={handleAddToCart}>
                        Añadir al carrito
                    </Button>
                </Box>
            </Box>
        </VStack>
    );
};
