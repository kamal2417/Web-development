// import React,{useState} from 'react'
// function App (){
//     let [add,plusAdd]=useState(0)
//     return(
//   <>
//   <h3>No of Items-{add}</h3>
//   <button onClick={()=>{
//     plusAdd(++add)
//   }

//   }>Add Items</button>
//   </>
//     )
// }
// export default App;



// import React,{useState} from 'react'
// function App(){
//     let [add,setAdd]=useState(0)
//     return(
//      <>
//      <h4>Cart Items-{add}</h4>
//      <button onClick={
//         ()=>{

//            setAdd(++add) 
//         }
//      }>Add to cart</button>
//      </>
//     )
// }
// export default App;


import React from 'react'
class App extends React.Component{
    state={
        counter:0
    }
    render(){
        return(
   <>
    <h1>Increase Value:{this.state.counter}</h1>
    <button onClick={()=>{
        this.setState({
            counter:this.state.counter+1
        })
        // console.log("ok");
    }}>Add value</button>
   </>
        )
    }
}
export default App;


