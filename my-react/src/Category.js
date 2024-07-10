import React, { useState } from 'react';


export function Category({id, name, productList }) {
    return (
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            {productList}
        </div>
    );
}
