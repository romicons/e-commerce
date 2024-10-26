import { Image, Box } from "@chakra-ui/react";

export const AvatarImage = ({ src, alt, isSelected, onClick }) => {
    return (
        <Box
            as="button"
            onClick={onClick}
            display='flex'
            justifyContent='center'
            alignItems='center'
            borderRadius="full"
            outline={isSelected ? '3px solid' : '1px solid'}
            outlineColor={isSelected ? 'primary.600' : 'gray.200'}
            transition="outline-color 0.2s"
            _hover={{ outlineColor: 'primary.600' }}
            p={1}
        >
            <Image 
                src={src} 
                alt={alt} 
                boxSize="50px" 
                borderRadius="full" 
                objectFit="contain"
            />
        </Box>
    );
};
