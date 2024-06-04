import React from 'react'
import {useLocation,useParams} from 'react-router-dom'

function Query() {
    let {id}=useParams();
    let shiva=useLocation();
    let shiva1=new URLSearchParams(shiva.search);

  let category=shiva1.get('category');
  let posts=shiva1.get('posts');
  return (
    <div>
      <h4>ID:{id}</h4>
      {/* <h3>NAme;{name}</h3> */}
      <h3>Category:{category}</h3>
      <h3>Posts:{posts}</h3>
    </div>
  )
}

export default Query
