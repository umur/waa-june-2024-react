import React from "react";

export function Address(props){
    return(
        <div>
            <p>ID:{props.id}</p>
            <p>Street: {props.street}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
            <p>Country: {props.country}</p>
        </div>
    )
}