import React, {useState} from "react";
import axios from 'axios';

export function CreateUser(){
    const [username, setUsername] = useState({firstName:'',lastName:'',email:'',password:''});

    const changes = (e) => {
        setUsername({...username, [e.target.name]: e.target.value});
    }
    const submited = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/users', username)
            .then(response=> {
                console.log(response);
                setUsername({firstName:'',lastName:'',email:'',password:''}); // reset the form fields after submission

            }).catch(error=> {
                if (error.response.data){console.log(error.response.data);}
                else if(error.response){console.log(error.response)}
                else{console.log('Error', error.message)}
        })
          }

    return(
        <div>
            <h2>User Information</h2>
            <p>FirstName: <input type="text" value={username.firstName} onChange={changes} name='firstName'/></p>
            <p>LastName: <input type="text" value={username.lastName} onChange={changes} name='lastName'/></p>
            <p>Email: <input type="text" value={username.email} onChange={changes} name='email'/></p>
            <p>Password: <input type="password" value={username.password} onChange={changes} name='password'/></p>
            <button onClick={submited}>Submit</button>
        </div>
    )
}