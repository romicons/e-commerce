import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heading, SimpleGrid, VStack, Text, Button } from "@chakra-ui/react";
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
    return <Text>Cargando productos...</Text>; 
  }

  return (
    <VStack paddingBlock={6}>
      <Heading as="h2">Productos de {categoryNames[category] || category}</Heading>

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
        onClick={() => navigate("/categories")}
      >
        <IoArrowBackOutline />
        Regresar
      </Button>
    </VStack>
  );
};
