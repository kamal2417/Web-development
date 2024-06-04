import React,{useState} from 'react'

function Biding() {
    let [changeText,updateText]=useState(100)
    const tort = (event) => {
            event.preventDefault(); // Prevents the form from submitting and refreshing the page
            const newText = event.target.previousSibling.value; // Get the value from the input field
            updateText(newText); // Update the text state
        };
        let change=(e)=>{
            let temp=e.target.value;
            updateText(temp);


        }
    let shiva={
        display:'flex',
        // alignItems:'center',
        justifyContent:'center',
        marginTop:'30px',
    }
    let shiva1={
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'200px',
        marginRight:'120px'
    }
  return (
    <div>
      <h3 style={shiva1}>{changeText}</h3>
        <form style={shiva}>
        <input type="text"onChange={change}></input>
        <button style={{
            color:'violet',
            backgroundColor:'black',
            borderRadius:'20px',
            marginLeft:'25px'
        }} onClick={tort}>Change text</button>
        </form>
        <ul>
          <li>login</li>
        </ul>
    </div>
  )
}

export default Biding


// const tort = (event) => {
//     event.preventDefault(); // Prevents the form from submitting and refreshing the page
//     const newText = event.target.previousSibling.value; // Get the value from the input field
//     updateText(newText); // Update the text state
// };
// let change=(e)=>{
//     let temp=e.target.value;
//     updateText(temp)



