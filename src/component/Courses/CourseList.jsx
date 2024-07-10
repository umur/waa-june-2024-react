import React from "react";
import { Container } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    Button,
    useDisclosure
  } from '@chakra-ui/react';
  import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
  import UpdateCourse from "./UpdateCourse";

export default function CourseList ({courses}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
    <Container maxW='4xl'>
     <Text fontSize='4xl' margin={10}>List of Courses</Text>
        <TableContainer>
        <Table variant='striped' colorScheme='teal'>
            <Thead>
            <Tr>
                <Th>#</Th>
                <Th  fontSize='xl'>Name</Th>   
                <Th  fontSize='xl'>Code</Th>
                <Th></Th>
                <Th></Th>
            </Tr>
            </Thead>
            <Tbody>
            {
                courses.map(course => (
                <Tr id={course.id}>
                <Td>{course.id}</Td>
                <Td>{course.name}</Td>
                <Td>{course.code}</Td>
                <Td><Button onClick={onOpen}> <EditIcon w={5} h={5} color="green.500" /></Button></Td>
                <Td> <DeleteIcon w={5} h={5} color="red.500" /></Td>
                </Tr>
                ))
                }
            </Tbody>
        </Table>
        </TableContainer>

        <UpdateCourse  onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>
    </Container>
     
    )
  
    
}