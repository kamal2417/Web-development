import React,{useState} from 'react'

function Dom() {
    let Krishna=["Home","About","Contact","Skills","Login"]
    let Shiva=["Location","Staff","Reviews","Support"]
    let [value,setValue]=useState(0);
    function update(){
        if(value<10){
            setValue(value+1)
        }
        
    }
    function remove(){
     if(value>0){
        setValue(value-1)
     }
    }
  return (
    <div>
        <>
      <h3>Cart Items-{value}</h3>
      <button className=" btn btn-primary mx-2" onClick={update}>Add+</button>
      <button className="btn btn-success" onClick={remove}>Remove-</button>
      <ul>
        {Krishna.map(
            (shiva,index)=>(
               <li key={index}>{shiva}</li> 
            )
        )
            
        }
        {Shiva.map(
            (tags,index)=>(
                <li key={index}>{tags}</li>
            )
        )

        }
      </ul>

      </>
    </div>
  )
}

export default Dom
