import React from 'react';
import { useState, useEffect } from 'react';

const UserList = () => {//este componente mostrará una lista de usuarios traida por una api con fetch

    const [users, setUsers] = useState([]);

    useEffect(() => {
        //fetch a una api para obtener usuarios
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    //el array vacio [] hace que el useEffect se ejecute solo una vez al montar el componente, si no estuviera, se ejecutaria en cada renderizado
    },[]);

    return (
        <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md mt-20" id="users">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="mb-2 p-2 border-b border-gray-300">
                        <p className="font-semibold">{user.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;