import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Flex, Heading, SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react";
import { Product } from '../components/Product';
import { ProductsContext } from '../context/ProductsContext';
import { IoArrowBackOutline } from "react-icons/io5";

export const Search = () => {
  const { products, isLoading } = useContext(ProductsContext);
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filter = searchParams.get('filter'); 
    const query = searchParams.get('query'); 

    const results = products.filter((product) => {
      const matchesCategory = filter ? product.category === filter : true;
      const matchesName = query ? product.name.toLowerCase().includes(query.toLowerCase()) : true;
      return matchesCategory && matchesName;
    });

    setFilteredProducts(results);
  }, [products, searchParams]);

  if (isLoading) {
    return (
      <Flex width="100%" height="100vh" alignItems="center" justifyContent="center">
        <Spinner size='lg' color="primary.600" />
      </Flex>
    );
  }

  return (
    <VStack paddingBlock={6}>
      {filteredProducts.length === 0 ? (
        <Text>¡Lo sentimos! No encontramos productos que coincidan con tu búsqueda.</Text>
      ) : (
        <SimpleGrid columns={[1, 3]} spacing="20px" alignItems="center" paddingBlock={4}>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </SimpleGrid>
      )}
    </VStack>
  );
};
