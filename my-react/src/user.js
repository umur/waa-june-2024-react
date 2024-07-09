import React from 'react';
import {Review} from "./Review";
import {Address} from "./Address";

export function User(props){
    return(
        <div>
            <h2>User Details:</h2>
            <p>ID: {props.id}</p>
            <p>FirstName: {props.fname}</p>
            <p>LastName: {props.lname}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Address: {props.address}</p>
            <p>Review: {props.review}</p>

        </div>
    )
}