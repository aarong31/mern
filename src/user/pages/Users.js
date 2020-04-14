import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Aaron G', 
            image: 'https://wallpaperaccess.com/full/19066.jpg', 
            places: 3
        }
    ];

    return <UsersList items={USERS}/>;
};

export default Users;