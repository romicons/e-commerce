import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

import { Flex, Heading, SimpleGrid, Spinner, Text, VStack } from '@chakra-ui/react';

import { Product } from './Product';


export const TopSales = () => {
    const { productsArray, isLoading } = useContext(ProductsContext);


    const filteredProducts = productsArray.filter((product) => product.istopsale === "yes");

        return (
        <VStack>
            <Heading as='h2' textAlign='center'>
                Los más vendidos
            </Heading>
            {filteredProducts.length === 0 ? (
                <Text>¡Lo sentimos! No hay productos disponibles en esta categoría.</Text>
              ) : (
                <SimpleGrid 
                  columns={[1, 3]}
                  spacing='20px' 
                  alignItems='center' 
                  paddingBlock={4}
                >
                  {filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                </SimpleGrid>
              )}
        </VStack>
    );
};
