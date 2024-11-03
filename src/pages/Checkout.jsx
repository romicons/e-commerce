import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

import { Box, Button, Flex, Heading, Image, Stack, Text, useColorModeValue, useToast, VStack } from '@chakra-ui/react';

import { IoArrowBackOutline, IoCheckmarkDone } from "react-icons/io5";
import { GrFormClose } from "react-icons/gr";

export const Checkout = () => {
    const bgColor = useColorModeValue('gray.100', 'rgba(255, 255, 255, 0.08)');
    const { addOrder, clearCart, removeFromCart, user } = useContext(AuthContext);
    const navigate = useNavigate(); 
    const cart = user.cart; 
    const toast = useToast();

    const handleCheckout = () => {
        if (!user || cart.length === 0) {
            navigate('/login');
        } else {
            addOrder(cart); 
            clearCart(); 
            navigate('/user')
            toast({
                title: "Compra realizada.",
                description: "Tu orden se ha completado con éxito.",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
        }
    };

    return (
        <VStack paddingBlock={6} spacing={4} w="100%">
            <Flex width="100%" justifyContent="flex-start" paddingLeft={5}>
                <Button gap={1} variant='custom' onClick={() => navigate(-1)}>
                    <IoArrowBackOutline />
                    Regresar
                </Button>
            </Flex>
            <Box bg={bgColor} display='flex' flexDirection='column' padding={4} gap={4} boxShadow="md" w={{ base: '90%', md: '80%' }} borderRadius='lg'>
                <Heading as="h2" fontSize='1.6rem' textAlign="center">
                    Detalles de la orden
                </Heading>
                <Stack spacing={4}>
                    {cart.map((item) => (
                        <Flex
                            key={item.id}
                            paddingBlock={4}
                            paddingInline={2}
                            flexDirection="column"
                            boxShadow="md"
                            borderRadius="lg"
                            bg={bgColor}
                            w="100%"
                        >
                            <Flex justifyContent="start" gap="1rem" alignItems="center" width="100%">
                                <Button onClick={() => removeFromCart(item.id)} padding={0}>
                                    <GrFormClose />
                                </Button>
                                <Image
                                    boxSize="50px"
                                    objectFit="contain"
                                    src={item.img}
                                    alt={item.name}
                                    borderRadius="md"
                                />
                                <Text fontSize="1.2rem" fontWeight="bold">
                                    {item.name}
                                </Text>
                            </Flex>
                            <Flex justifyContent="space-between" alignItems="center" mt={2}>
                                <Text fontSize='1.1rem'>
                                    Unidades: {item.quantity}
                                </Text>
                                
                                <Text fontSize="1.5rem" fontWeight="bold">
                                    $ {item.price * item.quantity}
                                </Text>
                            </Flex>
                        </Flex>
                    ))}
                </Stack>
                {cart.length > 0 && (
                    <Box mt={4} paddingTop={4} borderTop="1px" borderColor="gray.200">
                        <Flex justifyContent="space-between" alignItems="center">
                            <Text fontSize="1.8rem" fontWeight="bold">Total:</Text>
                            <Text fontSize="1.8rem" fontWeight="bold">
                                $ {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
                            </Text>
                        </Flex>
                    </Box>
                )}
                <Button gap={2} alignSelf='center' fontSize='1.3rem' variant='custom' onClick={handleCheckout}>
                    <IoCheckmarkDone />
                    Finalizar compra
                </Button>
            </Box>
        </VStack>
    );
};
