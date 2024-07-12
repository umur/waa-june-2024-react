
import React, {useState} from "react";
import {useNavigate} from "react-router";
import axios from "axios";

export default function CreatePerson(){
    const [personState,setPersonState]=useState({
        fname:'',
        lname:'test'
    });
    const navigate=useNavigate();
    const changeValue=(event)=>{
        setPersonState({...personState,[event.target.name]:event.target.value})
    }
    const btnLoadAllPerson=()=>{
        navigate("/persons");
    }
    const btnAddPerson =async ()=>{
        await axios.post("http://localhost:8080/persons",personState);
    }
    return (
        <div>
            <input type="button" value="Person list" onClick={btnLoadAllPerson}/>
            <input type="text" value={personState.fname} name="fname"
                onChange={changeValue}
            />
            <input type="button" value="Add Person" onClick={btnAddPerson} />
        </div>
    )
}