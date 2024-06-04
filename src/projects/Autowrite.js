import React,{useState} from 'react'

export default function TypeWriter(props) {
    const[myStyle,setmyStyle]=useState({
    color:"black",
    backgroundColor:"white"
  })
  const[btntext,setBtnText]=useState("Enable Dark mode")
  const [alert, setAlert] = useState()
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleStyle=()=>{
    if(myStyle.color==="black"){
      setmyStyle({
        color:"white",
        backgroundColor:"black"
      })
      setBtnText("Enable light mode")
      showAlert("light mode has been enabled");
      document.title="React App-Dark mode"
    }
    else{
      setmyStyle({
        color:"black",
        backgroundColor:"white"
      })
      setBtnText("Enable Dark mode");
      showAlert("Dark mode has been enabled");
      document.title="React App-Light mode"
    }
  }
  
  const upperCase=()=>{
    // console.log(text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const lowerCase=()=>{
    // console.log(text);
    let newText=text.toLowerCase();
    setText(newText);
  }

  const copyText=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const clearText=()=>{
    let newText="";
    setText(newText);
  }
  const onChange=(event)=>{
    // console.log("onchange");
    setText(event.target.value)
  }
  // let openWindow =document.querySelector("kamal");
  //    openWindow.onClick=function(){
  //     window.open("https://gmail.com");
  //    }

  let openWindow=()=>{
    window.open("https://gmail.com");
  }



  
  const[text,setText]=useState('');
  return (
    <>
    <div className="container" style={myStyle}>
      <div className="mb-3 my-5">
        <h5>{props.heading}</h5>
  <textarea className="form-control my-4" id="myBox" rows="8" value={text} onChange={onChange}></textarea>
  <button className="btn btn-primary mx-3"onClick={upperCase}>Change to Capital letters</button>
  <button className="btn btn-warning mx-3"onClick={lowerCase}>Change to Small letters</button>
  <button className="btn btn-success my-3" onClick={copyText}>Copy text</button>
  <button className="btn btn-dark mx-3" onClick={clearText}>Clear text</button>

</div>
<div className="footer my-5">
  <h4>Text Summary</h4>
  <p>{text.split("").length}words and {text.length}characters</p>
  <h4>Preview</h4>
  <p>{text}</p>
</div>
<button className="btn btn-danger" onClick={toggleStyle}>{btntext}</button>
<button className="btn btn-warning mx-5" onClick={openWindow}> Open Gmail</button>
    </div>
    </>
  )
}
