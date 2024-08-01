import { Heading, Image, SimpleGrid, VStack } from '@chakra-ui/react'

import balancedlogo from '../assets/Brands/balancedlogo.webp'
import completelogo from '../assets/Brands/completelogo.webp'
import dogselectionlogo from '../assets/Brands/dogselectionlogo.webp'
import eukanubalogo from '../assets/Brands/eukanubalogo.webp'
import hoplogo from '../assets/Brands/hoplogo.webp'
import nutriquelogo from '../assets/Brands/nutriquelogo.webp'
import protemixlogo from '../assets/Brands/protemixlogo.webp'
import purinalogo from '../assets/Brands/purinalogo.webp'
import royalcaninlogo from '../assets/Brands/royalcaninlogo.webp'
import siegerlogo from '../assets/Brands/siegerlogo.webp'
import therapylogo from '../assets/Brands/therapylogo.webp'
import vitalcanlogo from '../assets/Brands/vitalcanlogo.webp'


export const BrandShowcase = () => {
    return(
        <VStack p={4}>
            <Heading as='h2' textAlign='center'>
                LAS MARCAS QUE NOS ACOMPAÑAN
            </Heading>
            <SimpleGrid columns={4} spacing='10px'>
                        <Image
                            objectFit='cover'
                            src={vitalcanlogo}
                            alt='Vital Can Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={eukanubalogo}
                            alt='Eukanuba Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={siegerlogo}
                            alt='Sieger Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={completelogo}
                            alt='Complete Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={balancedlogo}
                            alt='Balanced Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={purinalogo}
                            alt='Purina Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={royalcaninlogo}
                            alt='Royal Canin Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={therapylogo}
                            alt='Therapy Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={dogselectionlogo}
                            alt='Dog Selection Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={nutriquelogo}
                            alt='Nutrique Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={hoplogo}
                            alt='Hop! Logo'
                        />
                        <Image
                            objectFit='cover'
                            src={protemixlogo}
                            alt='Protemix Logo'
                        />
                    </SimpleGrid>
        </VStack>
    )
}