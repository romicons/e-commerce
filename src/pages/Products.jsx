import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react"

import { Link } from "react-router-dom";

import { GiDogBowl, GiDogHouse, GiHeartPlus, GiSoap } from "react-icons/gi";
import { FaBone } from "react-icons/fa";

export const Products = () => {
    return(
        <VStack paddingBlock={6}>
            <Heading as="h2">
                Productos
            </Heading>
            <SimpleGrid 
                columns={[1, 5]}
                spacing='30px' 
                alignItems='center' 
                paddingBlock={4}
            >
                <Link to='#'>
                    <Box w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8} _hover={{ color:'secondary.900' }}>
                            <GiDogHouse fontSize='60px' />
                            <Heading as='h3' fontSize='2xl'>
                                Accesorios
                            </Heading>
                    </Box>
                </Link>
                <Link to='#'>
                    <Box w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8} _hover={{ color:'secondary.900' }}>
                            <GiDogBowl fontSize='60px' />
                            <Heading as='h3' fontSize='2xl'>
                                    Alimentos
                            </Heading>
                    </Box>
                </Link>
                <Link to='#'>
                    <Box w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8}  _hover={{ color:'secondary.900' }}>
                        <GiSoap fontSize='60px' />
                        <Heading as='h3' fontSize='2xl'>
                                Estética e Higiene
                        </Heading>
                    </Box>
                </Link>
                <Link to='#'>
                    <Box w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8} _hover={{ color:'secondary.900' }}>
                        <FaBone fontSize='60px' />
                        <Heading as='h3' fontSize='2xl'>
                                Juguetes & Snacks
                        </Heading>
                    </Box>
                </Link>
                <Link to='#'>
                    <Box w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8} _hover={{ color:'secondary.900' }}>
                        <GiHeartPlus fontSize='60px'/>
                        <Heading as='h3' fontSize='2xl' _hover={{ color: 'secondary.900'}}>
                                Salud
                        </Heading>
                    </Box>
                </Link>
            </SimpleGrid>
        </VStack>
    )
}