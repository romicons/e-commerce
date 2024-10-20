import { Link } from 'react-router-dom';

import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react"

import { IoArrowForwardOutline } from "react-icons/io5";

export const Product = ({product}) => {

    return (
        <VStack padding={4} gap={2} boxShadow="md" w='300px' justifyContent='center' alignItems='center' borderRadius='lg'>
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
            <Button variant='custom' gap={1}  as={Link} to={`/products/${product.category}/${product.id}`}>
                <IoArrowForwardOutline />
                Ver detalles
            </Button>
        </VStack>
    )
}