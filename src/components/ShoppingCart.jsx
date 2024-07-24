import { Box, Button, Badge } from '@chakra-ui/react';

import { LiaShoppingCartSolid } from "react-icons/lia";

export const ShoppingCart = ({ itemCount, onClick }) => {
  return (
    <Box position="fixed" bottom="20px" right="20px">
      <Button position="relative" color="primary.600" borderRadius="50%" w={16} h={16} onClick={onClick}>
        <LiaShoppingCartSolid fontSize="30px" />
        {itemCount > 0 && (
          <Badge
            position="absolute"
            top="-1"
            right="-1"
            colorScheme="red"
            borderRadius="full"
            fontSize="0.8em"
          >
            {itemCount}
          </Badge>
        )}
      </Button>
    </Box>
  );
};

