import React from 'react';
import axios from 'axios';
import { useEffect,useState } from'react';
import {User} from './user';
import {Address} from './Address';

export function Display(){
    const [users, setUsername] = useState([])
    const [showcase,setShowcase] = useState(false)

    const userInfo = async () => {
        const response = await axios.get('http://localhost:8080/users/all');
        setUsername(response.data);
        console.log(response.data);

    }
    useEffect(() => {
        userInfo()
    }, []);
    const showcaseChange = (e)=>{
        setShowcase(!showcase);
    }

    return (
        <div>
            <h2>User Information</h2>
            {showcase && (
                <ul>
                    {users.map(user => (
                        <User key={user.id} user={user} />
                    ))}
                </ul>
            )}
            <button onClick={showcaseChange}>UserDetail</button>
        </div>
    );
}