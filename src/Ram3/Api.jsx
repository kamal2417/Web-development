import React,{useState} from 'react'

function Api() {
let [products,setProducts]=useState(0)
function shashi(){
    setProducts(products++)
}
function shashis(){
 if(products>0){
    setProducts(products--)
 }
}
function change(e){
setProducts(e.target.value)

}
  return (
    <div>
      <h3>{products}</h3>
    <button className=" btn btn-warning" onClick={shashi}>Click here +</button>
    <button className=" btn btn-warning" onClick={shashis}>Click here -s</button>
    <input type="text" onChange={change}/>
    </div>
  )
}

export default Api
