import React from 'react'

function Items(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.title}</h3>
      <h3>{props.price}</h3>
    </div>
  )
}

export default Items
