import React from 'react';

export const UsersList = ({users}) => (
    <ul>
        { users.map(user => <li>{user.first_name + " " + user.last_name}</li>) }
    </ul>
)