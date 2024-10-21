import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { Box, Button, Heading, Image, Text, VStack, Flex } from "@chakra-ui/react";
import { ProductsContext } from '../context/ProductsContext';

import { IoArrowBackOutline } from "react-icons/io5";

export const ProductDetail = () => {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const { productsArray } = useContext(ProductsContext);

    const product = productsArray.find((product) => product.id === id && product.category === category);

    if (!product) {
        return <Text>Producto no encontrado</Text>;
    }

    return (
        <VStack paddingBlock={6} spacing={4} w="100%">
            <Flex width="100%" justifyContent="flex-start" paddingLeft={5}>
                <Button
                    gap={1}
                    variant='custom'
                    onClick={() => navigate(-1)} 
                    
                >
                    <IoArrowBackOutline />
                    Regresar
                </Button>
            </Flex>
            <Box padding={4} gap={2} boxShadow="md" w={{ base: '90%', md: '80%' }} borderRadius='lg'>
                <Heading as="h2" fontSize='1.5rem' textAlign="center" mb={4}>
                    {product.name}
                </Heading>
                <Flex 
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent="space-between" 
                    alignItems="flex-start" 
                    gap={4} 
                >
                    <Image 
                        src={product.img} 
                        alt={product.name} 
                        boxSize="300px" 
                        objectFit="contain" 
                        p={5} 
                    />
                    <Text textAlign='justify' paddingBlock={2} width={{ base: "100%", md: "70%" }}>
                        {product.longDescription}
                    </Text>
                </Flex>
                <Box width="100%" textAlign="center" mt={4}>
                    <Button variant='custom' gap={1}>
                        Añadir al carrito
                    </Button>
                </Box>
            </Box>
        </VStack>
    );
};
