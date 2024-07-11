import React from "react";
import {useNavigate} from "react-router";

export default function Person (props){

    const navigate = useNavigate();

    const onShowDetailButtonClicked = (id)=>{
        console.log(id);
        navigate("/person-detail/" + id);
    }

    return (
        <div>
            Firstname : {props.fname}
            Lastname: {props.lname}
            <input
                type='button'
                value='Details'
                onClick={ ()=>{
                    onShowDetailButtonClicked(props.id);
                }}
            />
        </div>
    )
}