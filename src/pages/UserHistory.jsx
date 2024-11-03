import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';

import { Avatar, Box, Flex, Grid, Heading, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";

export const UserHistory = () => {
    const inputBgColor = useColorModeValue('secondary.100', 'rgba(255, 255, 255, 0.08)');
    const { user, orders } = useContext(AuthContext);

    return (
        <VStack paddingBlock={6} width='100%'>
            <Grid
                templateColumns={{ base: "1fr", md: "30% 70%" }}
                gap={8}
                width="90%"
                maxWidth="1200px"
            >
                <Flex flexDirection="column" gap={4}>
                    <Heading as="h2" textAlign="center" width="100%">Perfil</Heading>
                    <Flex
                        padding={4}
                        flexDirection="column"
                        gap={4}
                        boxShadow="md"
                        borderRadius="lg"
                        bg={inputBgColor}
                    >
                        <Flex flexDirection="row" gap={4} alignItems="center">
                            <Avatar size="md" name={user.name} src={user.avatar} />
                            <Heading as="h3" fontSize="1.5rem">
                                {user.name} {user.lastname}
                            </Heading>
                        </Flex>
                        <Text fontSize="1.2rem">Fecha de nacimiento: {user.datebirth}</Text>
                        <Text fontSize="1.2rem">Email: {user.email}</Text>
                    </Flex>
                </Flex>

                <Flex flexDirection="column" gap={2}>
                    <Heading as="h3" textAlign="center">Historial de Compras</Heading>
                    {orders && orders.length > 0 ? (
                        [...orders].sort((a, b) => new Date(b.date) - new Date(a.date)).map((order, index) => (
                            <Flex key={order.id} flexDirection="column" padding={4} boxShadow="md" borderRadius="lg" bg={inputBgColor} marginTop={2}>
                                <Text fontWeight="bold" fontSize="1.2rem">Productos:</Text>
                                <Flex gap={2} flexDirection="column">
                                    {order.products.map((product) => (
                                        <Box display="flex" flexDirection="row" gap={2} key={product.id} padding={2} borderRadius="md" boxShadow="sm" bg={inputBgColor}>
                                            <Flex>
                                                <Image src={product.img} alt={product.name} boxSize="120px" objectFit="contain" p={5} />
                                            </Flex>
                                            <Flex flexDirection="column">
                                                <Heading as="h4" fontSize="1.2rem">
                                                    {product.name}
                                                </Heading>
                                                <Text>{product.shortDescription}</Text>
                                                <Text>Precio: $ {product.price}</Text>
                                                <Text>Cantidad: {product.quantity}</Text>
                                            </Flex>
                                        </Box>
                                    ))}
                                </Flex>
                                <Flex justifyContent="space-between" paddingTop={2}>
                                    <Text fontWeight="bold" fontSize="1.2rem">
                                        Fecha: {new Date(order.date).toLocaleDateString()}
                                    </Text>
                                    <Text fontWeight="bold" fontSize="1.2rem">Total: ${order.total}</Text>
                                </Flex>
                            </Flex>
                        ))
                    ) : (
                        <Text textAlign='center' fontSize='1.5rem'>Aún no has efectuado ninguna compra.</Text>
                    )}

                </Flex>
            </Grid>
        </VStack>
    );
};
