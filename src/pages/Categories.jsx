import { Box, Heading, SimpleGrid, useColorModeValue, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

import { GiDogBowl, GiDogHouse, GiHeartPlus, GiSoap } from "react-icons/gi";
import { FaBone } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Categories = () => {
    const inputBgColor = useColorModeValue('secondary.100', 'rgba(255, 255, 255, 0.08)');
    const navigate = useNavigate();

    return (
        <VStack paddingBlock={6}>
            <Breadcrumb alignSelf='start' spacing='8px' padding={2} bg='transparent' fontSize='1.5rem' fontWeight='bold' separator={<MdOutlineKeyboardArrowRight />}>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate("/")}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Categorías</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Heading as="h2">
                Categorías
            </Heading>
            <SimpleGrid 
                columns={[1, 3]}
                spacing='30px' 
                alignItems='center' 
                paddingBlock={4}
            >
                <Link to={`/products/accessories`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Box bg={inputBgColor} w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8} _hover={{ color: 'secondary.900' }}>
                        <GiDogHouse fontSize='60px' />
                        <Heading as='h3' fontSize='2xl'>
                            Accesorios
                        </Heading>
                    </Box>
                </Link>
                <Link to={`/products/food`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Box bg={inputBgColor} w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8} _hover={{ color: 'secondary.900' }}>
                        <GiDogBowl fontSize='60px' />
                        <Heading as='h3' fontSize='2xl'>
                            Alimentos
                        </Heading>
                    </Box>
                </Link>
                <Link to={`/products/hygiene`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Box bg={inputBgColor} w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8} _hover={{ color: 'secondary.900' }}>
                        <GiSoap fontSize='60px' />
                        <Heading as='h3' fontSize='2xl'>
                            Estética e Higiene
                        </Heading>
                    </Box>
                </Link>
                <Link to={`/products/snacksandtoys`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Box bg={inputBgColor} w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8} _hover={{ color: 'secondary.900' }}>
                        <FaBone fontSize='60px' />
                        <Heading as='h3' fontSize='2xl'>
                            Juguetes & Snacks
                        </Heading>
                    </Box>
                </Link>
                <Link to={`/products/health`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Box bg={inputBgColor} w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8} _hover={{ color: 'secondary.900' }}>
                        <GiHeartPlus fontSize='60px' />
                        <Heading as='h3' fontSize='2xl'>
                            Salud
                        </Heading>
                    </Box>
                </Link>
            </SimpleGrid>
        </VStack>
    );
};
