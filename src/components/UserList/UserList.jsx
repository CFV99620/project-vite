import React from 'react';
import { useState, useEffect } from 'react';

const UserList = () => {//este componente mostrará una lista de usuarios traida por una api con fetch

    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //fetch a una api para obtener usuarios
        const fetchUsers = async () => {//async sirve para definir una función asíncrona que puede contener operaciones asíncronas, como fetch y await se usan para esperar a que una promesa se resuelva antes de continuar con la ejecución del código
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchUsers();
    //el array vacio [] hace que el useEffect se ejecute solo una vez al montar el componente, si no estuviera, se ejecutaria en cada renderizado
    },[]);

    if (loading) {
        return <div className="max-w-2xl mx-auto p-6 text-center mt-20">Loading...</div>;
    } else if (error) {
        return <div className="max-w-2xl mx-auto p-6 text-center mt-20 text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md mt-20" id="posts">
            <h1 className="text-2xl font-bold mb-4">Post List</h1>
            <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <ul>
                {posts// el filter sirve para filtrar los posts que contengan el texto buscado en el titulo, el map para recorrer el array y mostrar cada post en un li
                    .filter(post => 
                        post.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map(post => (
                        <li key={post.id} className="mb-2 p-2 border-b border-gray-300">
                            <p className="font-semibold">{post.title}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UserList;