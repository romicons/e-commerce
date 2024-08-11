import { Box, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react"

import { FaBolt, FaCheckCircle, FaHandsHelping, FaLightbulb, FaRibbon, FaSun } from "react-icons/fa";

export const AboutUs = () => {
    return(
        <VStack paddingBlock={5}>
            <Heading as="h2">
                QUIÉNES SOMOS
            </Heading>
            <HStack padding={4}>
                <Box w='50%'>

                </Box>
                <Box w='50%'>
                    <Heading as='h3' fontSize='3xl'>
                        Nuestra misión
                    </Heading>
                    <Text>
                    Buscamos contribuir en la creación de un mundo mejor. Nuestro objetimos es ayudarte a amar y proteger a sus mascotas.
                    Creamos equipos de trabajo solidarios, proactivos y capacitados.
                    Invertimos e innovamos para mejorar nuestro servicio y acercarnos cada día más.
                    Priorizamos el aporte y la participación solidaria para crear una comunidad inclusiva y el cuidado del medio ambiente.
                    </Text>
                </Box>
            </HStack>
            <HStack  padding={4}>
                <Box w='50%'>
                    <Heading as='h3' fontSize='3xl'>
                        Nuestros valores
                    </Heading>
                    <Text>
                        En Pets Go creemos que para cumplir con nuestra misión, necesitamos tener un estilo propio de realizar negocios y eso se refleja en nuestros Valores Corporativos.
                        Con servicio, cumplimiento, agilidad, calidez, compromiso e innovación.
                    </Text>
                </Box>
                <Box>

                </Box>
            </HStack>
            <SimpleGrid 
                columns={[1, 3]}
                spacing='30px' 
                alignItems='baseline' 
                padding={4}
            >
                <Box w='300px'>
                    <Heading as='h4' fontSize='2xl' color='primary.600' display='flex' alignItems='center' justifyContent='center' gap={2} p='2'>
                        <FaHandsHelping />
                        Servicio
                    </Heading>
                    <Text>
                        Como valor supremo, la calidad del servicio al cliente es lo que nos distingue de la competencia y constituye un factor del éxito de nuestro negocio. La calidad de servicio se mide en todos los procesos de interacción con el cliente.
                    </Text>
                </Box>
                <Box w='300px'>
                    <Heading as='h4' fontSize='2xl' color='primary.600' display='flex' alignItems='center' justifyContent='center' gap={2} p='2'>
                        <FaCheckCircle/>
                        Cumplimiento
                    </Heading>
                    <Text>
                        Es la flexibilidad con la que desarrollamos nuestro negocio y nos adaptamos constantemente a las necesidades y deseos de nuestros clientes.
                    </Text>
                </Box>
                <Box w='300px'>
                    <Heading as='h4' fontSize='2xl' color='primary.600' display='flex' alignItems='center' justifyContent='center' gap={2} p='2'>
                        <FaSun/>
                        Calidez
                    </Heading>
                    <Text>
                        Refleja el amor, la vocación y el respeto a los demás. Es el afecto, la cordialidad y la amabilidad en el trato con nuestros compañeros, clientes, socios comerciales y demás interlocutores.
                    </Text>
                </Box>
                <Box w='300px'>
                    <Heading as='h4' fontSize='2xl' color='primary.600' display='flex' alignItems='center' justifyContent='center' gap={2} p='2'>
                        <FaBolt/>
                        Agilidad
                    </Heading>
                    <Text>
                        Es la flexibilidad con la que desarrollamos nuestro negocio y nos adaptamos constantemente a las necesidades y deseos de nuestros clientes.
                    </Text>
                </Box>
                <Box w='300px'>
                    <Heading as='h4' fontSize='2xl' color='primary.600' display='flex' alignItems='center' justifyContent='center' gap={2} p='2'>
                        <FaRibbon/>
                        Compromiso
                    </Heading>
                    <Text>
                        Surge de la convicción personal en torno a los beneficios que trae el desempeño responsable de las tareas a cargo. El Compromiso permite pasar de las promesas a los hechos, generando resultados y beneficios tangibles.
                    </Text>
                </Box>
                <Box w='300px'>
                    <Heading as='h4' fontSize='2xl' color='primary.600' display='flex' alignItems='center' justifyContent='center' gap={2} p='2'>
                        <FaLightbulb/>
                        Innovación
                    </Heading>
                    <Text>
                        Es la aplicación eficiente de la creatividad. Se refleja en la redefinición y/o reinvención de los productos, las estrategias, las actividades y las funciones con miras a su mejoramiento. La Innovación permite encontrar mayores beneficios de lo que ya existe.
                    </Text>
                </Box>
            </SimpleGrid>
        </VStack>
    )
}