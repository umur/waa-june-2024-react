import React, {useState} from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Container,
    Text,
    Button
  } from '@chakra-ui/react';
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';

export default function UpdateCourse ({onOpen, onClose, isOpen}) {
    const [state, setState] = useState({
        name: "",
        code: ""
    })

    const handleOnChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})

    }
    return (

        <>
  
        <Modal onClose={onClose} isOpen={isOpen}  size={"xl"} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Course</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Container maxW='4xl'>
        <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input  id="name" name="name" value={state.name}  onChange={handleOnChange}/>
        <FormLabel marginTop={5}>Code</FormLabel>
        <Input id="code" name="code" value={state.code} onChange={handleOnChange}/>
        </FormControl>

    </Container>
            </ModalBody>
            <ModalFooter>

        <Button colorScheme='teal' variant='outline' marginTop={5}>
            Submit
        </Button>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>  

    )}