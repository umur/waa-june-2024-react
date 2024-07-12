import React, {useState} from "react";
import {useParams} from "react-router";
import {useEffect} from "react";
import axios from "axios";

export default function PersonDetail(){
    const params=useParams();

    const personDetail={};
    const[personState,setPersonState] = useState({});

    const findPersonDetails =async ()=>{
        const result=await axios.get(`http://localhost:8080/persons/${params.personid}`);
        console.log(result);
        setPersonState(result.data);
        console.log(personState);
    }
    useEffect(()=>{
        findPersonDetails();
    },[]);
    return (
        <div>
            <h3>Person details</h3>
            <div>
                <p>id : {personState.id}</p>
                <p>name : {personState.fname } {personState.lname}</p>

            </div>
        </div>
    )
}