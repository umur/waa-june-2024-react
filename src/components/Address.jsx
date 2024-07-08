import React from "react";

export default function Address(props) {
    const { address } = props;
    return (
        <div>Address: {address ? `${address.street}, ${address.city}, ${address.zip}` : 'No Address'}</div>
    )
}