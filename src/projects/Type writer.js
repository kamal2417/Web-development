import React,{useState} from 'react'

export default function Typewriter(props) {
  const handleupClick=()=>{
    console.log(text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleonChange=(event)=>{
    console.log("text was changed");

    setText(event.target.value)
  }
  const[text,setText]= useState("Enter text here");
  return (
    <div className="container my-5">
        <div className="mb-3">
            <h5>{props.title}</h5>
  <textarea className="form-control my-4" value={text} onChange={handleonChange} id="myBox"placeholder="lets start typing..." rows="10"></textarea>
</div>
<button className="btn btn-primary" onClick={handleupClick}>Change to upper case</button>
    </div>
  )
}
