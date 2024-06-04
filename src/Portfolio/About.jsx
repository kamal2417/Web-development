import React from 'react'

const About = () => {
    let openWindow=()=>{
        window.open("https://gmail.com");
    } 
  return (
    
    <div>
      <h3>Hi hello welcome to about page</h3>
    <button className="btn btn-secondary" onClick={openWindow}>Gmail</button>
    </div>
  )
}

export default About
