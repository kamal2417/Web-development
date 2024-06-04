// import React,{useState} from 'react'
// function App(){
//     let [value,updateValue]=useState("")
//     let Price=30000;
//     return(
// <>
// <h5>Model:{value}</h5>
//   <h6>Price:{Price}</h6>
//   <input id='krishna'/>
//   <button onClick={()=>{
//     let krishna=document.getElementById('krishna').value;
//     updateValue(krishna)
//   }}>Model Name</button>
//   </>
//     )
// }
// export default App;

import React from 'react'
// import './Usestate.css';

const UseStatefunction = () => {
  return (
    <div className='tot'>
      <>
      <h5>change Background color</h5>
      <input type='color' onChange={
        (e)=>{
   document.body.style.background=e.target.value
        }
      }
        />
      </>
    </div>
  )
}

export default UseStatefunction
