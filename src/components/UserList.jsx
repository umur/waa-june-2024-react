import React from 'react';
import users from '../data/users.json';
import addresses from '../data/addresses.json';
import Address from './Address';

const UserList = () => {
    const addressMap = {};
    addresses.forEach(address => {
        addressMap[address.userId] = address;
    });
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => {
                    const address = addressMap[user.id];
                    return (
                        <li key={user.id}>
                            <div>Full name: {user.firstName} {user.lastName}</div>
                            <div>Email: {user.email}</div>
                            <Address address={address}></Address>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default UserList;
