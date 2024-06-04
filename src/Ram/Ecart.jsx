import React,{useState} from 'react'
import './Ekart.css'
function App(){
   let [counter,setCounter]=useState(0);
   let limit=20;
   let Addnumber=()=>{
      if(counter<limit){
         setCounter(counter+1);
      }
   };

   let Minusone=()=>{
      if(counter>0){
         setCounter(counter-1)
      }
   }

   return(
    <div className="krishna">
      <h3>Add to Cart</h3>
      <button className='add' onClick={Addnumber} disabled={counter === limit}>+</button>
      <p>{counter}</p>
      <button className='minus' onClick={Minusone} disabled={counter === 0}>-</button>
    </div>
   )
}
export default App;



// import React from 'react';
// // import Child from './Ram/Childprops';
// // import Event from './Ram/Eventchange';
// // import Onchange from './Ram/Onchange2';
// // import UseState from './Ram/UseState function';
// import Ekart from './Ram/Ecart';
// // import './Ekart.css'
// function App() {
  
//   return (

//     <>
// {/* <Child> Hi hello</Child>
// <Event/>
// <Onchange/>
// <UseState/> */}
// <Ekart/>
//   </>
   
//   );
// }

// export default App;