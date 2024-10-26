import { useState } from "react";
import { Button, Input, InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react";
import { PiEye, PiEyeClosed } from "react-icons/pi";

export const PasswordInput = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const inputBgColor = useColorModeValue('white', 'secondary.100');

    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Ingresa tu contraseña'
          _placeholder={{ color: '#000000' }}
          bg={inputBgColor} 
          color='#000000'
        />
        <InputRightElement width='4.5rem'>
          <Button 
            h='1.75rem' 
            size='sm' 
            onClick={handleClick} 
            _hover={{
                color: 'secondary.900'
            }}
            color='#000000'
          >
            {show ? <PiEye /> : <PiEyeClosed />}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
};
