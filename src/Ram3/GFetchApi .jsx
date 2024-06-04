import React,{useState} from 'react'
import {useEffect} from 'react'
import './Fetch.css';


function GFetchApi () {
  useEffect(
    ()=>{
      productsList();
    },[]);

  async function productsList(){
    let res= await fetch("https://voicerss-text-to-speech.p.rapidapi.com/");
    let allproducts=await res.json();
    updateProducts(allproducts);
    console.log(allproducts);
    
  }
  let [products,updateProducts]=useState([]);
  if(products.length===0){
    return(<h3>Wait data is loading...</h3>)
  }
  
  return (
    <div className="krishna">
      {products.map((p)=>(
        <div className="shiva" key={p.id}>
          <p>Name:{p.title}</p>
          <img src={p.image} alt={p.title}/>
          <p>Price:{p.price}</p>
        </div>
      ))}
    </div>
  )
}

export default GFetchApi 




// import React from 'react';
// import GFetch from './Ram3/GFetchApi ';
// import Items from './Ram3/Items';
// function App() {
//   return ( 
//   <>
//   <GFetch/>
//   <Items/>
//   </>
//   );
// }

// export default App;