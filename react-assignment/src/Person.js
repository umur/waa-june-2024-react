import React from "react";
import {useNavigate} from "react-router";

export default function Person(props){
    const navigate=useNavigate();
    const btnClick=()=>{
        console.log(props)
        navigate(`/detail/${props.id}`);
    }
    return (
        <div>

            <p>
                first name : {props.fname} , last name : {props.lname}
                <input type="button" value="view" onClick={btnClick}/>
            </p>

        </div>
    );
}