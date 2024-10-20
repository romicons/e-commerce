import { useContext } from "react"

import { Flex, Heading, SimpleGrid, Spinner, VStack } from "@chakra-ui/react"

import { ProductsContext } from "../context/ProductsContext"

import { Product } from "../components/Product"

export const Products = () => {
    const { productsArray, isLoading } = useContext(ProductsContext);

    if (isLoading) {
        return (
            <Flex
            width="100%"
            height="100vh" // Ocupa toda la altura de la ventana
            alignItems="center" // Centra verticalmente
            justifyContent="center" // Centra horizontalmente
            >
                <Spinner size='lg' color="primary.600" />
            </Flex>
        )}

    return(
        <VStack paddingBlock={6}>
            <Heading as="h2">
                Productos
            </Heading>
            <SimpleGrid 
                columns={[1, 3]}
                spacing='20px' 
                alignItems='center' 
                paddingBlock={4}
            >
                {productsArray.length > 0 ? (
                        productsArray.map((product) => (
                        <Product key={product.id} product={product} />
                        ))
                    ) : (
                        <Text fontSize='3xl'>
                            Lo sentimos, no se encontraron productos.
                        </Text>
                    )}
            </SimpleGrid>
        </VStack>
    )
}