import React from 'react';
import {Review} from "./Review";
import {Address} from "./Address";

export function User(props) {
    const { user } = props;

    return (
        <div>
            <p>ID: {user.id}</p>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Review: {user.review}</p>
            {/* Assuming Address component is used for rendering address */}
           
        </div>
    );
}