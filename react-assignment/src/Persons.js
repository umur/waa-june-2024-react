import {useEffect, useState} from "react";
import axios from "axios";
import Person from "./Person";
import {useNavigate} from "react-router";
export default function Persons(){
    const[personList,setPersonList]=useState([]);
    const navigate=useNavigate();
    const loadAllPerson=async()=>{
        const result=await axios.get("http://localhost:8080/persons");
        setPersonList(result.data);
    }
    const btnCreatePerson=function (){
        navigate("/add")
    }
    useEffect(()=>{
        loadAllPerson();
    },[]);
    return(
        <div>
            <h3>Person List</h3>
            <input type="button" value="Add Person" onClick={btnCreatePerson} />
            {
                personList.map((item)=>{
                    return <Person
                        id={item.id}
                        fname={item.fname}
                        lname={item.lname}
                    />
                })
            }
        </div>
    );
}