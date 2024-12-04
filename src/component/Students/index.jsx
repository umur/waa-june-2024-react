import React from "react";
import StudentList from "./StudentList";
import CreateStudent from "./CreateStudent";
import {students} from "../../data/data";
import { Box, useDisclosure, Flex, Button } from "@chakra-ui/react";

export default function Student () {
  const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button bg='green' marginTop={5} p={4} color='white' borderRadius='md' px={4} h={8} w={"130px"} onClick={onOpen}>
            Add Student
            </Button>
          <StudentList students={students}/>
          <CreateStudent onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>
      
        </>
     
    )
  
    
}