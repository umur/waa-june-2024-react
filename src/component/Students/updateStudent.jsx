import React, { useState } from "react";
import {majors} from "../../data/data";
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
    Select
  } from "@chakra-ui/react"

export default function UpdateStudent ({onOpen, onClose, isOpen}) {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gpa: "",
        coursesTaken: "",
        major: "",
    })

    const handleOnChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})

    }
    return (
 <>
  
  <Modal onClose={onClose} isOpen={isOpen}  size={"xl"} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Update Student</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
  <Container maxW='4xl'>
  <FormControl isRequired>
    <FormLabel>First Name</FormLabel>
    <Input    id="fname" name="fname" value={state.firstName}  onChange={handleOnChange}/>
    <FormLabel marginTop={5}>Last Name</FormLabel>
    <Input  id="lname" name="lname" value={state.lastName} onChange={handleOnChange}/>

    <FormLabel>Email</FormLabel>
    <Input  id="email" name="email" value={state.email}  onChange={handleOnChange}/>
    <FormLabel marginTop={5}>Gpa</FormLabel>
    <Input id="gpa" name="gpa" value={state.gpa} onChange={handleOnChange}/>
    <FormLabel marginTop={5}>Course Taken</FormLabel>
    <Input  id="courseT" name="courseT" value={state.coursesTaken} onChange={handleOnChange}/>
    <FormLabel marginTop={5}>Major</FormLabel>
    <Select  id="major" name="major" onChange={handleOnChange}>
        {
            majors.map(major => (
            <option value={major.name} id={major.id}>{major.name}</option>
            ))  
        }
    </Select>
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
     
    )
  
    
}