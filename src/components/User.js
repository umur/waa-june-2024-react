import React from "react";

function User ({user}) {


  return (
    <div>
      <div>Id: {user.id}</div>
      <div>Name: {user.name}</div>
      <div>Phone: {user.phone}</div>
      <div>Email: {user.email}</div>
      <div>Address: {user.address}</div>
    </div>
  );
}

export default User;