import { Box, Button, Heading, Image, HStack, SimpleGrid, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { AiOutlineTeam } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PiEnvelopeSimpleThin, PiPhoneLight, PiSealQuestionLight } from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";

import logo from '../assets/e-commerce-logo.png';
import americanexpresslogo from '../assets/PaymentMethods/americanexpresslogo.webp';
import mercadopagologo from '../assets/PaymentMethods/mercadopagologo.webp';
import visalogo from '../assets/PaymentMethods/visalogo.webp';
import tarjetashoppinglogo from '../assets/PaymentMethods/tarjetashoppinglogo.webp';
import argencardlogo from '../assets/PaymentMethods/argencardlogo.webp';
import caballogo from '../assets/PaymentMethods/caballogo.webp';
import falabellalogo from '../assets/PaymentMethods/falabellalogo.webp';
import cencosudlogo from '../assets/PaymentMethods/cencosudlogo.webp';
import dinnersclublogo from '../assets/PaymentMethods/dinnersclublogo.webp';
import mastercardlogo from '../assets/PaymentMethods/mastercardlogo.webp';
import maestrologo from '../assets/PaymentMethods/maestrologo.webp';
import naranjalogo from '../assets/PaymentMethods/naranjalogo.webp';

export const Footer = () => {
    const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const alignItems = useBreakpointValue({ base: 'center', md: 'flex-start' });
    const columnAlignItems = useBreakpointValue({ base: 'center', md: 'flex-start' });

    return(
        <>
            <HStack 
                bg="white" 
                alignItems={alignItems} 
                paddingInline='50px' 
                gap="2" 
                justifyContent='space-between' 
                flexDirection={flexDirection}
            >
                <VStack 
                    display='flex' 
                    flexDirection='column' 
                    alignItems={columnAlignItems}
                    height="100%"
                    justifyContent="space-between"
                >
                    <Heading as='h3' noOfLines={1} color="primary.600" display="flex" direction="row" alignItems="center">
                        <Image
                            boxSize='50px'
                            objectFit='cover'
                            src={logo}
                            alt='Pets Go Logo'
                        />
                        Pets Go
                    </Heading>
                    <HStack>
                        <TfiLocationPin />
                        <Text fontSize='lg'>
                            Av. Example 123
                        </Text>
                    </HStack>
                    <HStack>
                        <PiEnvelopeSimpleThin />
                        <Text fontSize='lg'>
                            petsgotiendaonline@gmail.com
                        </Text>
                    </HStack>
                    <HStack>
                        <PiPhoneLight />
                        <Text fontSize='lg'>
                            011-123-4567
                        </Text>
                    </HStack>
                </VStack>
                <VStack 
                    display='flex' 
                    flexDirection='column' 
                    alignItems={columnAlignItems}
                    height="100%"
                    justifyContent="space-between"
                >
                    <Heading as='h3' noOfLines={1} color="primary.600">
                        Nosotros
                    </Heading>
                    <HStack>
                        <AiOutlineTeam />
                        <Text fontSize='lg'>
                            Quiénes somos
                        </Text>
                    </HStack>
                    <HStack>
                        <PiSealQuestionLight />
                        <Text fontSize='lg'>
                            Preguntas frecuentes
                        </Text>
                    </HStack>
                </VStack>
                <VStack 
                    display='flex' 
                    flexDirection='column' 
                    alignItems={columnAlignItems}
                    height="100%"
                    justifyContent="space-between"
                >
                    <Heading as='h3' noOfLines={1} color="primary.600">
                        Métodos de pago
                    </Heading>
                    <SimpleGrid columns={4} spacing='10px'>
                        <Image
                            objectFit='cover'
                            src={mercadopagologo}
                            alt='Mercado Pago Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={americanexpresslogo}
                            alt='American Express Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={visalogo}
                            alt='Visa Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={tarjetashoppinglogo}
                            alt='Tarjeta Shopping Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={argencardlogo}
                            alt='Argencard Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={caballogo}
                            alt='Cabal Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={falabellalogo}
                            alt='Fallabela Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={cencosudlogo}
                            alt='Cencosud Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={dinnersclublogo}
                            alt='Dinners Club Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={mastercardlogo}
                            alt='Mastercard Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={maestrologo}
                            alt='Maestro Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={naranjalogo}
                            alt='Naranja Logo'
                        />
                    </SimpleGrid>
                </VStack>
            </HStack>
            
            <VStack bg="primary.500" align="center" justifyContent='space-between' paddingBlock='10px' gap={1} paddingInline='120px'>
                <Text fontSize='sm' textAlign='center'>
                    © Romina Constantinoff - 2024. Todos los derechos reservados. 
                </Text>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <HStack gap='3'>
                        <Button href="https://github.com/romicons">
                            <FaGithub />
                        </Button>
                        <Button href="https://www.linkedin.com/in/romina-evelin-constantinoff/"> 
                            <FaLinkedinIn />
                        </Button>
                        <Button href="mailto:romina.constantinoff@gmail.com" >
                            <PiEnvelopeSimpleThin />
                        </Button>
                    </HStack>
                </Box>
            </VStack>
        </>
    );
}
