// import React from 'react'
// import {useRef} from 'react'

// function UseRefhook() {
//     const updatedvalue=useRef(0);
//     function krishna(){
//         updatedvalue.current++;
//         console.log( updatedvalue.current);
//     }


//   return (
//     <div>
//       <p></p>
//       <button className="btn btn-primary mt-2 " onClick={krishna}>Add Item</button>
//     </div>
//   )
// }

// export default UseRefhook

// input focus

// import React from 'react'
// import {useRef,useEffect,useState} from 'react'

// function UseRefhook() {
//     const inputvalue=useRef("");
//     useEffect(
//         ()=>{
//             inputvalue.current.focus();
//         }
//     )
//     let [value,setvalue]=useState("");
//     function change(e){
//        setvalue(e.target.value);
//     }
//   return (
//     <div>
//       <input type='text' ref={inputvalue} onChange={change}/><br></br>
//       <b>{value}</b>
//     </div>
//   )
// }

// export default UseRefhook


// stop watch 

import React from 'react'
import {useState,useRef} from 'react'
function UseRefhook() {
  let [count,setcount]=useState(0);
  let [name,setname]=useState('');
  const timer=useRef();
  let StartTimer=()=>{
    timer.current=setInterval(
      ()=>{
         setcount(count=>count+1);
      },1000);

  }
  let StopTimer=()=>{
    clearInterval(timer.current);
  }
  function changes(e){
setname(e.target.value)
setcount(count=>count+1);

  }
  return (
    <div>
      <button className="btn btn-success" onClick={StartTimer}>Start</button>
      <h3>{count}</h3>
      <button className="btn btn-danger" onClick={StopTimer}>Stop</button>
      <h3>{name}</h3>
      <p>{count}<input type='text' onChange={changes}/></p>
    </div>
  )
}

export default UseRefhook




