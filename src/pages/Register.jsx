import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

import { useNavigate } from "react-router-dom";

import { Button, FormControl, FormLabel, Grid, GridItem, Heading, Input, RadioGroup, Text, useColorModeValue, useToast, VStack, } from "@chakra-ui/react";

import { PasswordInput } from "../components/PasswordInput";
import { AvatarImage } from "../components/AvatarImage";

export const Register = () => {
    const [avatar, setAvatar] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const inputBgColor = useColorModeValue('secondary.100', 'rgba(255, 255, 255, 0.08)');
    const navigate = useNavigate();
    const toast = useToast();

    const validatePassword = (password) => {
        const minLength = 8;
        const maxLength = 20;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength || password.length > maxLength) {
            return `La contraseña debe tener entre ${minLength} y ${maxLength} caracteres.`;
        }
        if (!hasUppercase) return 'Debe contener al menos una letra mayúscula.';
        if (!hasLowercase) return 'Debe contener al menos una letra minúscula.';
        if (!hasNumber) return 'Debe contener al menos un número.';
        if (!hasSpecialChar) return 'Debe contener al menos un carácter especial.';
        return '';
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordError(validatePassword(newPassword));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const userEmail = e.target.email.value;
        const userPassword = password;
        const userName = e.target.name.value;
        const userLastname = e.target.lastname.value;
        const userDateBirth = e.target.datebirth.value;
        const userAvatar = avatar;

        if (passwordError) {
            toast({
                title: "Error de contraseña",
                description: "Corrige los errores de contraseña antes de continuar.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        const registerNewUser = async (newUser) => {
            try {
                await setDoc(doc(db, "users", newUser.id), newUser);
            } catch (err) {
                console.log(err);
            }
        };

        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
                const user = {
                    name: userName,
                    lastname: userLastname,
                    datebirth: userDateBirth,
                    avatar: userAvatar,
                    email: userEmail,
                    orders: [],
                    cart: [],
                    id: userCredential.user.uid,
                };
                registerNewUser(user);
                navigate("/");
                toast({
                    title:`¡Bienvenide ${userName}!`,
                    description: "Estamos felices de que formes parte de la comunidad de Pets Go.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <VStack paddingBlock={6} w='100%'>
            <Heading as="h2">Crea una cuenta</Heading>
            <VStack padding={4} gap={2} boxShadow="md" width='80%' justifyContent='center' alignItems='center' borderRadius='lg' bg={inputBgColor} as='form' onSubmit={handleSubmit}>
                <FormControl gap={1} display='flex' flexDirection='column' isRequired>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                        <GridItem>
                            <FormLabel>Nombre</FormLabel>
                            <Input 
                                placeholder="Kiba" 
                                type="text"  
                                _placeholder={{ color: '#000000' }}  
                                bg={useColorModeValue("white", "secondary.100")} 
                                color='#000000'
                                name="name"
                            />
                        </GridItem>
                        <GridItem>
                            <FormLabel>Apellido</FormLabel>
                            <Input 
                                placeholder="Inuzuka" 
                                type="text"  
                                _placeholder={{ color: '#000000' }}  
                                bg={useColorModeValue("white", "secondary.100")} 
                                color='#000000'
                                name="lastname"
                            />
                        </GridItem>
                        <GridItem>
                            <FormLabel>Fecha de nacimiento</FormLabel>
                            <Input 
                                placeholder='7 de Julio de 1994' 
                                size='md' 
                                type='date' 
                                _placeholder={{ color: '#000000' }}  
                                bg={useColorModeValue("white", "secondary.100")} 
                                color='#000000'
                                name="datebirth"
                            />
                        </GridItem>
                        <GridItem>
                            <FormLabel>Email</FormLabel>
                            <Input 
                                placeholder="kiba.inuzuka@gmail.com" 
                                type="email"  
                                _placeholder={{ color: '#000000' }}  
                                bg={useColorModeValue("white", "secondary.100")} 
                                color='#000000'
                                name="email"
                            />
                        </GridItem>
                    </Grid>
                    <FormLabel>Contraseña</FormLabel>
                    <PasswordInput value={password} onChange={handlePasswordChange} />
                    {passwordError && <Text color="red.500">{passwordError}</Text>}
                    <FormLabel paddingBlock={2}>Selecciona tu avatar</FormLabel>
                    <RadioGroup onChange={setAvatar} value={avatar} name="avatar">
                        <Grid templateColumns="repeat(4, 1fr)" gap={4} padding={4}>
                            {[...Array(8)].map((_, index) => (
                                <GridItem key={index} display="flex" justifyContent="center" alignItems="center">
                                    <AvatarImage 
                                        avatar={`avatar${index + 1}`} 
                                        src={`https://firebasestorage.googleapis.com/v0/b/petsgo-ecommerce.appspot.com/o/${['Dog-Avatar.svg', 'Cat-Avatar.svg', 'Cat-Avatar2.svg', 'Dog-Avatar2.svg', 'Hamster-Avatar.svg', 'HamsterAvatar2.svg', 'Rabbit-Avatar.svg', 'Bird-Avatar.svg'][index]}?alt=media&token=${['74ec451d-d30e-413c-b2f8-1a5e18a99959', '551110e3-d5ca-44ae-ba9c-9677e81e4be3', '8dec1bdd-bcca-4f83-84b8-c5981eba2a85', 'ebf65d9b-f79b-445a-b6fb-c307280d3993', 'f43c0689-bdbe-4902-8a1e-a99dc6703751', 'bdfe5c9f-85b5-4d35-b8a3-20d8a673a31d', 'a26a3a00-12ec-43b0-98ab-172f07bfabaf', '5be1fae8-ae66-450c-b102-95c41b6c13a1'][index]}`}
                                        isSelected={avatar === `https://firebasestorage.googleapis.com/v0/b/petsgo-ecommerce.appspot.com/o/${['Dog-Avatar.svg', 'Cat-Avatar.svg', 'Cat-Avatar2.svg', 'Dog-Avatar2.svg', 'Hamster-Avatar.svg', 'HamsterAvatar2.svg', 'Rabbit-Avatar.svg', 'Bird-Avatar.svg'][index]}?alt=media&token=${['74ec451d-d30e-413c-b2f8-1a5e18a99959', '551110e3-d5ca-44ae-ba9c-9677e81e4be3', '8dec1bdd-bcca-4f83-84b8-c5981eba2a85', 'ebf65d9b-f79b-445a-b6fb-c307280d3993', 'f43c0689-bdbe-4902-8a1e-a99dc6703751', 'bdfe5c9f-85b5-4d35-b8a3-20d8a673a31d', 'a26a3a00-12ec-43b0-98ab-172f07bfabaf', '5be1fae8-ae66-450c-b102-95c41b6c13a1'][index]}`}
                                        onClick={() => setAvatar(`https://firebasestorage.googleapis.com/v0/b/petsgo-ecommerce.appspot.com/o/${['Dog-Avatar.svg', 'Cat-Avatar.svg', 'Cat-Avatar2.svg', 'Dog-Avatar2.svg', 'Hamster-Avatar.svg', 'HamsterAvatar2.svg', 'Rabbit-Avatar.svg', 'Bird-Avatar.svg'][index]}?alt=media&token=${['74ec451d-d30e-413c-b2f8-1a5e18a99959', '551110e3-d5ca-44ae-ba9c-9677e81e4be3', '8dec1bdd-bcca-4f83-84b8-c5981eba2a85', 'ebf65d9b-f79b-445a-b6fb-c307280d3993', 'f43c0689-bdbe-4902-8a1e-a99dc6703751', 'bdfe5c9f-85b5-4d35-b8a3-20d8a673a31d', 'a26a3a00-12ec-43b0-98ab-172f07bfabaf', '5be1fae8-ae66-450c-b102-95c41b6c13a1'][index]}`)}
                                    />
                                </GridItem>
                            ))}
                        </Grid>
                    </RadioGroup>
                </FormControl>
                <Button variant='custom' w='50%' gap={1} alignSelf='center' fontSize={20} type="submit">
                        Registrarte
                </Button>
            </VStack>
        </VStack>
    );
};
