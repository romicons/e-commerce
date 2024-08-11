import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box, Heading, Highlight, VStack } from "@chakra-ui/react"

export const FAQ = () => {
    return(
        <VStack paddingBlock={5} width="100%">
            <Heading as="h2" paddingBottom={4}>
                PREGUNTAS FRECUENTES
            </Heading>
            <VStack width="100%">
                <Accordion defaultIndex={[]} allowMultiple width="100%">
                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%" >
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿Qué es Pets Go?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Somos una tienda online especializada en productos para perros y gatos. Actualmente podés encontrar alimento balanceado, piedritas para gatos, antipulgas/garrapaticidas, accesorios y mucho más. 
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%">
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿Es seguro pagar con tarjetas?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Highlight
                                query='SÍ'
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'secondary.900' }}
                            >
                                SÍ. Es seguro comprar con tarjetas de crédito en Pets Go. Trabajamos con MercadoPago, que cumple con los estándares más exigentes de seguridad del Security Standard Council. Tus datos están protegidos. Comprá tranquilo/a.
                            </Highlight>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%" >
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿En cuánto tiempo se acredita mi pago?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Con Tarjeta de crédito, tu pago se acredita en el momento. Con el resto puede demorar hasta 48 hs. 
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%" >
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿Puedo comprar sin tarjeta de crédito?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Highlight
                                query='SÍ'
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'secondary.900' }}
                            >
                                SÍ. Podés pagar en efectivo cuando el pedido llegue a tu casa.
                            </Highlight>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%" >
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿Hacen envíos en el día?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Highlight
                                query='NO'
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'secondary.900' }}
                            >
                                 NO. Tu pedido será registrado y podrá ser enviado a partir del día siguiente. 
                            </Highlight>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%" >
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿Cuál es la zona de cobertura para entregas?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Dentro de Argentina, cubrimos todo Capital Federal y Gran Buenos Aires.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%" >
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿Cuánto cuesta el envío?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Highlight
                                query={['NADA', 'gratuitos']}
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'secondary.900' }}
                            >
                                 NADA. Todos nuestros envíos son gratuitos. 
                            </Highlight>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%" >
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿En qué días y horarios puedo recibir mi pedido?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Podés recibir tu pedido de lunes a sábados. Podés chequear la disponibilidad de horarios al momento de realizar la compra.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%" >
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿Puedo elegir horario y fecha de entrega?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Highlight
                                query='SÍ'
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'secondary.900' }}
                            >
                                 SÍ. Podes elegir el día y el rango horario en que va a ser entregado tu pedido. Una vez que seleccionas el producto que te interesa, podés elegire la franja horario que te quede más cómoda.
                            </Highlight>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%" >
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿Es mi compra segura?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Highlight
                                query='seguro'
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'secondary.900' }}
                            >
                                Comprar en Pets Go es seguro. Los pagos los procesamos con MercadoPago  que posee los más altos estándares de seguridad en internet para el pago online.
                                Si sos de los que prefieren pagar en efectivo cuando llega el pedido, también podés hacerlo. Cuando terminás el proceso de compra indicás las opción de “pagar en efectivo en casa” y ¡listo!
                            </Highlight>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                        <AccordionButton _expanded={{ bg: 'primary.500' }} width="100%" >
                            <Box as='span' flex='1' textAlign='left' fontSize='xl' fontWeight='bold'>
                                ¿Como puedo contactar con el servicio de atención al cliente?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Highlight
                                query={['petsgotiendaonline@gmail.com', '011-123-4567']}
                                styles={{ px: '2', py: '1', rounded: 'full', bg: 'secondary.900' }}
                            >
                                Cualquier duda o consulta que tengas, no dudes en comunicarte a nuestro email petsgotiendaonline@gmail.com ó si lo preferis escribí a nuestro whatsapp 011-123-4567.
                            </Highlight>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </VStack>
        </VStack>
    )
}
