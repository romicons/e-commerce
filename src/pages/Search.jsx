import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { useSearchParams } from 'react-router-dom';
import { Flex, SimpleGrid, Spinner, Text, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Product } from '../components/Product';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Search = () => {
  const { productsArray, isLoading } = useContext(ProductsContext);
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filter = searchParams.get('filter'); 
    const query = searchParams.get('query'); 
  
    const results = productsArray.filter((product) => {
      const matchesCategory = filter ? product.pet === filter : true;
      const matchesName = query ? product.name.toLowerCase().includes(query.toLowerCase()) : true;
      return matchesCategory && matchesName;
    });
  
    setFilteredProducts(results);
  }, [productsArray, searchParams]);

  if (isLoading) {
    return (
      <Flex width="100%" height="100vh" alignItems="center" justifyContent="center">
        <Spinner size='lg' color="primary.600" />
      </Flex>
    );
  }

  const breadcrumbsItems = [];
  if (searchParams.get('filter')) {
    breadcrumbsItems.push({ label: searchParams.get('filter') === 'dog' ? 'Perros' : 'Gatos', link: `/search?filter=${searchParams.get('filter')}` });
  }
  if (searchParams.get('query')) {
    breadcrumbsItems.push({ label: `Búsqueda: "${searchParams.get('query')}"`, link: `/search?query=${searchParams.get('query')}` });
  }

  return (
    <VStack paddingBlock={6}>
      <Breadcrumb alignSelf='start' spacing='8px' padding={2} bg='transparent' fontSize='1.5rem' fontWeight='bold' separator={<MdOutlineKeyboardArrowRight />}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbsItems.map((item, index) => (
          <BreadcrumbItem key={index} isCurrentPage={index === breadcrumbsItems.length - 1}>
            <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
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
