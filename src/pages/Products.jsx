import { useContext } from "react"

import { Heading, SimpleGrid, Spinner, VStack } from "@chakra-ui/react"

import { ProductsContext } from "../context/ProductsContext"

import { Product } from "../components/Product"

export const Products = () => {
    const { productsArray, isLoading } = useContext(ProductsContext);

    if (isLoading) {
        return <Spinner size='lg' color="primary.600" />;
      }

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
                        <div>No products found.</div>
                    )}
            </SimpleGrid>
        </VStack>
    )
}