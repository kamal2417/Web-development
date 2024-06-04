import React,{useState} from 'react'
function Buttoninput() {
    let [changetext,updateText]=useState("Shiva krishna");
    // let clicks=(e)=>{
    //     e.preventDefault();
    //     updateText(e.target.previousSibling.value);
    // }
    let changes=(e)=>{
        updateText(e.target.value)

    }
    let loggedin=true;
    let krishna=true;
  return (
    <div>
      <h3>{changetext}</h3>
      <input type='text' onChange={changes}></input>
      {/* <button onClick={clicks}>Change text</button> */}
    {
      loggedin?(<button>Login</button>):(null)
    }
    {
      krishna&&(<button>Signin</button>)
    }
    </div>
  )
}

export default Buttoninput
