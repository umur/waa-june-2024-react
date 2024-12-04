import React from "react";
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

export default function CreateCourse ({onOpen, onClose, isOpen, onChange, onSubmit, state}) {

    return (

        <>
  
        <Modal onClose={onClose} isOpen={isOpen}  size={"xl"} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Course</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
        <Container maxW='4xl'>
        <FormControl isRequired>
        <FormLabel>Course Id</FormLabel>
        <Input  id="id" name="id" value={state.id}  onChange={onChange}/>
        <FormLabel>Name</FormLabel>
        <Input  id="name" name="name" value={state.name}  onChange={onChange}/>
        <FormLabel marginTop={5}>Code</FormLabel>
        <Input id="code" name="code" value={state.code} onChange={onChange}/>
        </FormControl>

        </Container>
            </ModalBody>
            <ModalFooter>

        <Button colorScheme='teal' variant='outline' marginTop={5} onClick={ () => {
            onSubmit();
            onClose();
        }}>
            Submit
        </Button>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>


 
       

    )}