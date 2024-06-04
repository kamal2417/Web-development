import React,{useState,useEffect} from 'react'

function FetchApi() {
    let [todos,SetTodos]=useState([]);
    let [load,Setloads]=useState(true);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(json=>{
            console.log(json);
            SetTodos(json);
            Setloads(false);
        })
        .catch(error=>console.error("error in fevthing data",error));
    },[])
//     {loading ? (
//         <p>Loading...</p>
//     ) : (
//         <ul>
//             {todos.map(todo => (
//                 <li key={todo.id}>{todo.title}</li>
//             ))}
//         </ul>
//     )}
// </div>
  return (
    <div>
      <h3>Krishna</h3>
     {load?(
        <p>load...</p>
     ):(
        <ul>
            {todos.map(todo=>(
                <li key={todo.id}>{todo.titile}</li>
            ))}
        </ul>
     )
    }
    </div>
  )
}

export default FetchApi

