import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

import { useNavigate } from "react-router-dom";

import { Flex, Heading, SimpleGrid, Spinner, VStack, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Product } from "../components/Product";

export const Products = () => {
    const { productsArray, isLoading } = useContext(ProductsContext);
    const navigate = useNavigate();

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
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Todos los productos</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

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
    );
};
