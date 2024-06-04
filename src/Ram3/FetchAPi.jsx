import React,{useState} from 'react'
import {useEffect} from 'react';
function FetchAPi() {
    let [items,updateItems]=useState([])
    useEffect(
        ()=>{
            getItems()
        },[]
    )
    async function getItems(){
        let res=await fetch("https://fakestoreapi.com/products");
        let productList= await res.json()
        updateItems(productList)
        console.log(productList);
    }
    if(items.length===0){
            return(<h3>Fetching Data....</h3>)

    }
  return (
    <div>
      <h3>Products List</h3>
    </div>
  )
}

export default FetchAPi
