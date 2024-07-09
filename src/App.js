import React from "react";
import StudentList from "./StudentList";

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function App() {
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return (
    <div>
      <h1>My Counter App</h1>
      <ul>{listItems}</ul>
      <StudentList />
    </div>
  );
}

export default App;
