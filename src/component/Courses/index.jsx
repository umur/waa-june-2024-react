import React from "react";
import {courses } from "../../data/data";
import CreateCourse from "./CreateCourse";
import CourseList from "./CourseList";
import { Box, useDisclosure, Flex, Button } from "@chakra-ui/react";

export default function Course () {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button bg='green' marginTop={5} p={4} color='white' borderRadius='md' px={4} h={8} w={"130px"} onClick={onOpen}>
            Add Course
            </Button>
            <CourseList courses={courses} />
            <CreateCourse onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>
         </>
     
    )
  
    
}