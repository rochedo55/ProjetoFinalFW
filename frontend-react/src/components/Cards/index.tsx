import React from 'react'
import api from '../../services/api'; 
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

  
  const IMAGE =
    'https://imgs.casasbahia.com.br/55011901/1xg.jpg?imwidth=500';
  
  interface DeviceCard{
    id:Number,
    name:string,
    description:string,
    brand:string,
    image_link:string,
  }
 
   
  export default function Card(props:DeviceCard) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    //let navigate = useNavigate()
    async function deleteDevice(id:Number){
        const res = await api.delete(`/api/device/${id}`)
        console.log(res)
        document.location.reload();
        //navigate('/')
    }
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: '100',
              h: '100',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${props.image_link})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={props.image_link}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
             {props.brand}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {props.name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            
             <Text noOfLines={1}>
             {props.description}
            </Text>
            </Text>
            </Stack>
            <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            onClick={()=>{deleteDevice(props.id)}}
            _focus={{
              bg: 'gray.200',
            }}>
            Delete
          </Button>
          <Button
            onClick={onOpen}
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Ver mais
          </Button>
        </Stack>
          </Stack>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Descrição</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           {props.description}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      </Center>
    );
  }