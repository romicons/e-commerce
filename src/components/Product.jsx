import { useNavigate } from 'react-router-dom';

import { Button, Heading, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";

import { IoArrowForwardOutline } from "react-icons/io5";

export const Product = ({ product }) => {

    const inputBgColor = useColorModeValue('secondary.100', 'rgba(255, 255, 255, 0.08)');

    const navigate = useNavigate();

    const handleDetailsClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate(`/products/${product.category}/${product.id}`);
        }, 500); 
    };

    return (
        <VStack padding={4} gap={2} boxShadow="md" w='300px' justifyContent='center' alignItems='center' borderRadius='lg' bg={inputBgColor}>
            <Image
                boxSize='180px'
                objectFit='contain'
                src={product.img}
                alt={product.name}
            />
            <Heading as="h3" fontSize={20}>
                {product.name}
            </Heading>
            <Text>
                {product.shortDescription}
            </Text>
            <Heading as="h4" fontSize={18}>
                ${product.price}
            </Heading>
            <Button variant='custom' gap={1} onClick={handleDetailsClick}>
                <IoArrowForwardOutline />
                Ver detalles
            </Button>
        </VStack>
    );
};
