import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router";
import { Box, Card, CardHeader, CardBody, Stack, Text, Heading, StackDivider} from "@chakra-ui/react";
import ApiClient from "../../services/api-client";

export default function CourseDetails () {
    const params = useParams();
    const [course, setCourse] = useState();
    const apiClient = new ApiClient(`/courses`);

    useEffect( () => {
        getCourse()
    }, [])
    
    const getCourse = async () => {
        const data = await apiClient.get(params.id);
        setCourse(data);
    }
    if(course === undefined) return "No course";
    return (
        <>
        <Card maxW='md' margin="50px auto 0 auto">
        <CardHeader>
            <Heading size='md'>{course.name}</Heading>
        </CardHeader>   
        <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                Course Code
                </Heading>
                <Text pt='2' fontSize='sm'>
                {course.code} is a very good course
                </Text>
            </Box>
            </Stack>
        </CardBody>
        </Card>
         </>
     
    )
  
    
}