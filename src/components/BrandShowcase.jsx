import { Heading, Image, SimpleGrid, VStack } from '@chakra-ui/react'

import balancedlogo from '../assets/Brands/balancedlogo.webp'
import completelogo from '../assets/Brands/completelogo.webp'
import pedigreelogo from '../assets/Brands/pedigreelogo.png'
import eukanubalogo from '../assets/Brands/eukanubalogo.png'
import hoplogo from '../assets/Brands/hoplogo.webp'
import nutriquelogo from '../assets/Brands/nutriquelogo.png'
import optimumlogo from '../assets/Brands/optimumlogo.png'
import purinalogo from '../assets/Brands/purinalogo.png'
import royalcaninlogo from '../assets/Brands/royalcaninlogo.png'
import siegerlogo from '../assets/Brands/siegerlogo.png'
import therapylogo from '../assets/Brands/therapylogo.webp'
import vitalcanlogo from '../assets/Brands/vitalcanlogo.png'


export const BrandShowcase = () => {
    return(
        <VStack p={4}>
            <Heading as='h2' textAlign='center'>
                LAS MARCAS QUE NOS ACOMPAÑAN
            </Heading>
            <SimpleGrid columns={4} spacing='25px' alignItems='center'>
                        <Image
                            objectFit='cover'
                            src={vitalcanlogo}
                            alt='Vital Can Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={eukanubalogo}
                            alt='Eukanuba Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={siegerlogo}
                            alt='Sieger Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={completelogo}
                            alt='Complete Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={balancedlogo}
                            alt='Balanced Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={purinalogo}
                            alt='Purina Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={royalcaninlogo}
                            alt='Royal Canin Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={therapylogo}
                            alt='Therapy Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={pedigreelogo}
                            alt='Pedigree Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={nutriquelogo}
                            alt='Nutrique Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={hoplogo}
                            alt='Hop! Logo'
                            width='150px'
                        />
                        <Image
                            objectFit='cover'
                            src={optimumlogo}
                            alt='Optimum Logo'
                            width='150px'
                            height='auto'
                        />
                    </SimpleGrid>
        </VStack>
    )
}