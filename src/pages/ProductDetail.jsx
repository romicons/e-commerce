export const ProductDetail = () => {

    return (
        <VStack paddingBlock={6}>
            <Heading as="h2">
                CATEGORÍAS
            </Heading>
                    <Box w='250px' boxShadow="md" display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap={4} borderRadius='10px' paddingBlock={8} _hover={{ color:'secondary.900' }}>
                            <GiDogHouse fontSize='60px' />
                            <Heading as='h3' fontSize='2xl'>
                                Accesorios
                            </Heading>
                    </Box>
        </VStack>
    )
}