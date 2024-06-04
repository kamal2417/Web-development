    import React, { useState, useEffect } from 'react';

    function Thirdapi() {
        const [todos, setTodos] = useState([]);
        // const [loading, setLoading] = useState(true);

        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/todos").then(
                res => res.json())
            .then(json=>setTodos(json))
        }, [])

        return (
            <div>
                <h3>Shiva</h3>
                <ul> {/* Enclose list items within a <ul> element */}
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
                {/* {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {todos.map(todo => (
                            <li key={todo.id}>{todo.title}</li>
                        ))}
                    </ul>
                )} */}
            </div>
        );
    }

    export default Thirdapi;
