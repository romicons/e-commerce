import { Box, Button, Heading, Image, HStack, SimpleGrid, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineTeam } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PiEnvelopeSimpleThin, PiPhoneLight, PiSealQuestionLight } from "react-icons/pi";
import { TfiLocationPin } from "react-icons/tfi";
import logo from '../assets/img/e-commerce-logo.png';
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
    const contactFlexDirection = useBreakpointValue({ base: 'column', md: 'row' });
    const contactJustifyContent = useBreakpointValue({ base: 'center', md: 'space-between' });

    return (
        <>
            <HStack 
                bg="primary.500" 
                alignItems={alignItems} 
                paddingInline='50px'
                paddingBlock='15px' 
                gap="2" 
                justifyContent='space-around' 
                flexDirection={flexDirection}
                boxShadow="md"
            >
                <VStack 
                    display='flex' 
                    flexDirection='column' 
                    alignItems={columnAlignItems}
                    height="100%"
                    justifyContent="space-between"
                    color='secondary.500'
                >
                    <Heading as='h3' noOfLines={1} display="flex" direction="row" alignItems="center">
                        Contacto
                    </Heading>
                    <HStack>
                        <Text fontSize='xl' fontWeight='bold' display='flex' alignItems='center' gap='2'>
                            <TfiLocationPin aria-label='Location Icon'/>
                            Av. Example 123
                        </Text>
                    </HStack>
                    <HStack>
                        <Text fontSize='xl' display='flex' fontWeight='bold' alignItems='center' gap='2'>
                            <PiEnvelopeSimpleThin aria-label='Email Icon'/>
                            petsgotiendaonline@gmail.com
                        </Text>
                    </HStack>
                    <HStack>
                        <Text fontSize='xl' display='flex' fontWeight='bold' alignItems='center' gap='2'>
                            <PiPhoneLight aria-label='Phone Icon'/>
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
                    color='secondary.500'
                >
                    <Heading as='h3' noOfLines={1}>
                        Nosotros
                    </Heading>
                    <HStack>
                        <Link to="/aboutus">
                            <Text fontSize='xl' display='flex' fontWeight='bold' alignItems='center' gap='2'>
                                <AiOutlineTeam aria-label='Enterprise Icon'/>
                                Quiénes somos
                            </Text>
                        </Link>
                    </HStack>
                    <HStack>
                        <Link to="/faq">
                            <Text fontSize='xl' display='flex' fontWeight='bold' alignItems='center' gap='2'>
                                <PiSealQuestionLight aria-label='Question Icon'/>
                                Preguntas frecuentes
                            </Text>
                        </Link>
                    </HStack>
                </VStack>
                <VStack 
                    display='flex' 
                    flexDirection='column' 
                    alignItems={columnAlignItems}
                    height="100%"
                    justifyContent="space-between"
                    color='secondary.500'
                >
                    <Heading as='h3' noOfLines={1}>
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
            
            <VStack 
                bg="secondary.100" 
                align="center" 
                justifyContent={contactJustifyContent} 
                paddingBlock='10px' 
                gap={1} 
                paddingInline='120px' 
                boxShadow="md"
                flexDirection={contactFlexDirection}
            >
                <Text fontSize='sm' textAlign='center'>
                    © Romina Constantinoff - 2024. Todos los derechos reservados. 
                </Text>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <HStack gap='3'>
                        <Button href="https://github.com/romicons" color='primary.600' _hover={{ color: 'secondary.900'}}>
                            <FaGithub aria-label='Github Icon'/>
                        </Button>
                        <Button href="https://www.linkedin.com/in/romina-evelin-constantinoff/" color='primary.600' _hover={{ color: 'secondary.900'}}> 
                            <FaLinkedinIn aria-label='LinkedIn Icon'/>
                        </Button>
                        <Button href="mailto:romina.constantinoff@gmail.com" color='primary.600' _hover={{ color: 'secondary.900'}}>
                            <PiEnvelopeSimpleThin aria-label='Email Icon'/>
                        </Button>
                    </HStack>
                </Box>
            </VStack>
        </>
    );
}
