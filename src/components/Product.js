import React from "react";

function Product ({product}) {
  return (
    <div>
      <div>Id: {product.id}</div>
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
      <div>Description: {product.description}</div>
    </div>
  )
}

export default Product;