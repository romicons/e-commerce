import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Flex, Heading, SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react";
import { Product } from '../components/Product';
import { ProductsContext } from '../context/ProductsContext';
import { IoArrowBackOutline } from "react-icons/io5";

export const ProductList = () => {
  const { category } = useParams();
  const { productsArray, isLoading } = useContext(ProductsContext);
  const navigate = useNavigate();

  const categoryNames = {
    accesories: "Accesorios",
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
  )}

  return (
    <VStack paddingBlock={6}>
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
      <Button
        gap={1}
        variant='custom'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => {
            navigate("/categories");
          }, 300); 
        }}
      >
        <IoArrowBackOutline />
        Regresar
      </Button>
    </VStack>
  );
};
