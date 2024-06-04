import React,{useState} from 'react'
import './Todo.css';

function App(){
    // let krishna=(e)=>{
    //     document.body.style.background=e.target.value
    // }
    let [todoInput,updateInput]=useState('')
    let [todoList,updateTodos]=useState(
        [
            {
                id:1,
                project:"Learn Frontend"
            },
            {
                id:2,
                project:"Learn Backend"

            },
            {
                id:3,
                project:"Learn Database"
            }
        ]

    )
    function addNew() {
        if (todoInput === '') {
            alert("Search input is empty");
        } else {
            let newId = todoList.length > 0 ? Math.max(...todoList.map(todo => todo.id)) + 1 : 1;
            let newTodo = {
                id: newId,
                project: todoInput
            };
            updateTodos([...todoList, newTodo]);
            updateInput('');
        }
    }
    
   
    function deletesearch(id){
        updateTodos(todoList.filter(todo=>todo.id!==id));

    }
    function changevalue(e){
        let task=e.target.value;
        updateInput(task)

    }
    return(
        <>
        {/* <h4 className='text-center mt-5'>Search Bar</h4> */}
        <div className='container mt-5 w-50'>
            <div className="input-group mt-5">
        <input className='form-control' type='text' onChange={changevalue} placeholder='Search the web' value={todoInput}/>
        <button className='btn btn-primary' onClick={addNew}>Add</button>
       </div>
       <ul className='list-group mt-5'>
        {
            todoList.map(
               (todo)=>{
                return(
                    <li className='list-group-item' key={todo.id}>
                    <p>{todo.project}</p>
                    <button className='btn' onClick={() => deletesearch(todo.id)}>❌</button>
            </li>
                )
               } 
            )
        }
       </ul>
       {/* <button className='btn btn-danger'>login</button> */}
       {/* <p className='shiva'>Change color mode<input type="color" onChange={krishna}/></p> */}
        </div>
        </>
    )
}
export default App;



// app.js


// import React from 'react';
// import ToDo from './Ram2/ToDo list.jsx';
// // import './Todo2.css';
// function App() {
//   return (
//    <ToDo/>
//   );
// }

// export default App;
