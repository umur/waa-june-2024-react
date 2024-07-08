import React from "react";

function Category ({category}) {
  console.log(category);
  return (
    <div>
      <div>Id: {category.id}</div>
      <div>Name: {category.name}</div>
    </div>
  );
}
export default Category;