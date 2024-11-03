import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

import { useParams, useNavigate } from 'react-router-dom';

import { Flex, Heading, SimpleGrid, Spinner, Text, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { Product } from '../components/Product';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const ProductList = () => {
  const { category } = useParams();
  const { productsArray, isLoading } = useContext(ProductsContext);
  const navigate = useNavigate();

  const categoryNames = {
    accessories: "Accesorios",
    food: "Alimentos",
    hygiene: "Estética e Higiene",
    snacksandtoys: "Juguetes & Snacks",
    health: "Salud"
  };

  const filteredProducts = productsArray.filter((product) => product.category === category);

  if (isLoading) {
    return (
      <Flex
        width="100%"
        height="100vh"
        alignItems="center" 
        justifyContent="center" 
      >
        <Spinner size='lg' color="primary.600" />
      </Flex>
    );
  }

  return (
    <VStack paddingBlock={6}>
      <Breadcrumb alignSelf='start' spacing='8px' padding={2} bg='transparent' fontSize='1.5rem' fontWeight='bold' separator={<MdOutlineKeyboardArrowRight />}>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => navigate("/")}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => navigate("/categories")}>Categorías</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{categoryNames[category] || category}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading textAlign='center' as="h2">Productos de {categoryNames[category] || category}</Heading>

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
