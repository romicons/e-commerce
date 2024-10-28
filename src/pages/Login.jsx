import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

import { Alert, AlertIcon, Box, Button, Link as ChakraLink, FormControl, FormLabel, Heading, Input, Text, useColorModeValue, VStack,} from "@chakra-ui/react";
import { PasswordInput } from "../components/PasswordInput";


export const Login = () => {
    const [loginError, setLoginError] = useState();

    const inputBgColor = useColorModeValue('secondary.100', 'rgba(255, 255, 255, 0.08)');
    const bgColor = useColorModeValue('gray.100', 'rgba(255, 255, 255, 0.08)');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;

        signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoginError(errorMessage)
        });
    }

    return (
        <VStack paddingBlock={6} w='100%'>
            <Heading as="h2">Inicia Sesión</Heading>
            <VStack paddingTop={4} gap={4} boxShadow="md" justifyContent='center' alignItems='center' borderRadius='lg' bg={inputBgColor} w='80%'>
                <VStack as='form' onSubmit={handleSubmit} w='100%' paddingInline={4}>
                    <FormControl gap={1} display='flex' flexDirection='column'>
                                <FormLabel>Email</FormLabel>
                                <Input 
                                    placeholder="Ingresa tu correo electrónico" 
                                    type="email"  
                                    _placeholder={{ color: '#000000' }}  
                                    bg={useColorModeValue("white", "secondary.100")} 
                                    color='#000000'
                                    name="email"
                                />
                        <FormLabel>Contraseña</FormLabel>
                        <PasswordInput />
                    </FormControl>
                    <Button mt={4} variant='custom' fontSize={20} w='50%' gap={1} alignSelf='center' type="submit">
                            Ingresar
                    </Button>
                </VStack>
                <Box bg={bgColor} paddingBlock={2} display='flex' flexDirection='row' width='100%' gap={2} justifyContent='center' fontSize='1.2rem'>
                    ¿No tienes una cuenta aún? 
                        <Link to="/register">
                            <ChakraLink 
                                as={Text} 
                                display="flex" 
                                alignItems="center"
                                justifyContent='center'
                                margin='0 auto'
                                gap="5px"
                                fontWeight='bold' 
                                color={useColorModeValue("primary.600", "primary.200")} 
                                position="relative"
                                _hover={{ color: 'secondary.900', _after: { transform: 'scaleX(1)', transformOrigin: 'bottom left' } }}
                                _after={{
                                content: "''",
                                position: "absolute",
                                width: "100%",
                                transform: "scaleX(0)",
                                height: "2px",
                                bottom: 0,
                                left: 0,
                                backgroundColor: "secondary.900",
                                transformOrigin: "bottom right",
                                transition: "transform 0.25s ease-out",
                                }}
                            >
                                Regístrate aquí.
                            </ChakraLink>
                        </Link>
                    </Box>
            </VStack>

            {loginError && (
                <Alert status='error' display='flex' justifyContent='center' fontSize={18} fontWeight='bold'>
                    <AlertIcon />
                    {loginError}
                </Alert>
            )}
        </VStack>
    );
};
