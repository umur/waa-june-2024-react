import React from "react";
import "./student.css";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    Container,
    Button,
    useDisclosure
  } from '@chakra-ui/react';
  import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import UpdateStudent from "./updateStudent";

export default function StudentList ({students}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
          <Container maxW='4xl'>
     <Text fontSize='4xl' margin={10}>List of Students</Text>
        <TableContainer>
        <Table variant='striped' colorScheme='teal'>
            <Thead>
            <Tr>
                <Th>#</Th>
                <Th  fontSize='xl'>First Name</Th>   
                <Th  fontSize='xl'>Last Name</Th>
                <Th  fontSize='xl'>Email</Th>
                <Th></Th>
                <Th></Th>
            </Tr>
            </Thead>
            <Tbody>
            {
                students.map(student => (
                <Tr id={student.id}>
                <Td>{student.id}</Td>
                <Td>{student.firstName}</Td>
                <Td>{student.lastName}</Td>
                <Td>{student.email}</Td>
                <Td><Button onClick={onOpen}> <EditIcon w={5} h={5} color="green.500" /></Button></Td>
                <Td> <DeleteIcon w={5} h={5} color="red.500" /></Td>
                </Tr>
                ))
                }
            </Tbody>
        </Table>
        </TableContainer>
        <UpdateStudent  onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>
    </Container>
     
    )
  
    
}