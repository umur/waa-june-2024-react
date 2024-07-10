import React from "react";
import {Category} from "./Category";
import {Review} from "./Review";


export function Product({id,name,price,rating,review}){


    return(
        <div>
            <tr>
            <th> ID:{id}  </th>
            <th> Name:{name} </th>
            <th> Price: {price} </th>
            <th> Rating: {rating}</th>
            <th>Review: {review}</th>
            </tr>

        </div>
    )
}