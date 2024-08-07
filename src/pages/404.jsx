import { Box, Heading, Image, Text } from "@chakra-ui/react";

import notfoundimage from "../assets/img/NotFound.png"

export const NotFound = () => {
    return (
        <Box textAlign='center'>
            <Heading as='h3'>
                <Image
                boxSize='400px'
                objectFit='cover'
                src={notfoundimage}
                alt='Error'
                />
                ERROR 404
            </Heading>
            <Text fontSize='3xl'>
                Lo sentimos, la página solicitada no existe.
            </Text>
        </Box>
    );
  };