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
    useDisclosure,
    Tooltip
  } from '@chakra-ui/react';
  import {DeleteIcon, EditIcon, InfoIcon} from "@chakra-ui/icons";
  import UpdateCourse from "./UpdateCourse";
  import { useNavigate } from "react-router";

export default function CourseList ({courses, onDelete}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
  

    const onShowDetails = (id) => {
        navigate(`/course-detail/${id}`)
    }

    return (
    <Container maxW='4xl'>
     <Text fontSize='4xl' margin={10}>List of Courses</Text>
     {courses && courses.length > 0 &&
        <TableContainer>
        <Table variant='striped' colorScheme='teal'>
            <Thead>
            <Tr>
                <Th>#</Th>
                <Th  fontSize='xl'>Name</Th>   
                <Th  fontSize='xl'>Code</Th>
                <Th></Th>
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
                <Td> <EditIcon onClick={onOpen} w={5} h={5} color="green.500" cursor={"pointer"}/></Td>
                <Td> <DeleteIcon w={5} h={5} color="red.500" cursor={"pointer"} onClick={() => onDelete(course.id)}/></Td>
                <Td>  <InfoIcon w={5} h={5} color="green.700" cursor={"pointer"} onClick={()=>onShowDetails(course.id)}/></Td>
                </Tr>
                ))
                }
            </Tbody>
        </Table>
        </TableContainer>
}

        <UpdateCourse  onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>
    </Container>
     
    )
  
    
}