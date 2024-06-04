import React,{useState} from 'react'
import { useEffect } from 'react'

function Idom() {
  let [time,setimer]=useState(0);
  let [times,setchanges]=useState(20);

    useEffect(
        ()=>{
            console.log("hello");
        }
    )
    function update(){
      setimer(time+1)
    }
    function Click(){
       setimer(time-2)
    }
  return (
    <div>
      <h3>Krishna {time}</h3>
      <h5>{times}</h5>
      {console.log("shiva")};
    <button className="btn btn-primary" onClick={update}>login</button>
    <input type='text'onChange={(e)=>{
      setchanges(e.target.value)
    }}></input>
    <button onClick={Click}>Click here</button>
    </div>
  )
}

export default Idom


// App.js

// import React from 'react';
// // import './Todo2.css';
// // import Biding from './Ram2/Biding';
// import Button from './Ram2/Button input'
// import Dom from './Ram3/Dom.jsx'
// import Idom from './Ram3/Idom.jsx'
// function App() {
//   return (
//   // <Biding/>
  
//   <>
//   <Button/>
//   <Dom/>
//   <Idom/>
//   </>
//   );
// }

// export default App;
