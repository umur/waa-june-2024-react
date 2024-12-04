import React, {useState, useEffect} from "react";
// import {courses } from "../../data/data";
import CreateCourse from "./CreateCourse";
import CourseList from "./CourseList";
import ApiClient from "../../services/api-client";
import { Box, useDisclosure, Flex, Button } from "@chakra-ui/react";

export default function Course () {
    const { isOpen, onOpen, onClose } = useDisclosure()
     const [courses, setCourses] = useState();
     const [state, setState] = useState({
        id: "",
        name: "",
        code: ""
    })

    useEffect( () => {
        getAllCourses()
    }, [])
    const getAllCourses = async () => {
        const data =  await new ApiClient("/courses").getAll()
        setCourses(data);
    }

    const handleOnChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

 
    const handleSubmit = async () => {
        const data = await new ApiClient("/courses").post(state);
        setCourses(data);
        setState({
            id: "",
            name: "",
            code: ""});
    }

    const handleDelete = async (id) => {
        const data = await new ApiClient("/courses").delete(id);
        getAllCourses();
    }

    return (
        <>
            <Button bg='green' marginTop={5} p={4} color='white' borderRadius='md' px={4} h={8} w={"130px"} onClick={onOpen}>
            Add Course
            </Button>
            <CourseList courses={courses} onDelete={handleDelete}/>
            <CreateCourse onOpen={onOpen} onClose={onClose} isOpen={isOpen} onChange={handleOnChange} onSubmit={handleSubmit} state={state}/>
         </>
     
    )
  
    
}