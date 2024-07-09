import React, { useEffect, useState } from 'react';
import Address from './Address';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios.get('/users');
            // console.log(response);
            setUsers(response.data);
        } catch (error) {
            console.error('getUsers: ', error);
        }
    }

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => {
                    return (
                        <li key={user.id}>
                            <div>Full name: {user.firstName} {user.lastName}</div>
                            <div>Email: {user.email}</div>
                            <Address address={user.address}></Address>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default UserList;
