import React from 'react'

function Props1(p) {
  return (
    <div>
        <h1>Id-{p.Id}</h1>
      <h4>Name-{p.Name}</h4>
      <h3>Age-{p.Age}</h3>
      <h3>Place-{p.Place}</h3>
    </div>
  )
}

export default Props1



// App.js


// import React from 'react';
// import Props from './Ram/Props1.jsx';
// function App() {
//   let users=[
//     {
//       id:45,
//       Name:"Sai kamal",
//       Age:"23",
//       Place:"Warangal",
//     },
// {
//   id:25,
//   Name:"Krishna",
//   Age:"25",
//   Place:"khammam"
// },
// {
//   id:44,
//   Name:"Krishna2",
//   Age:"26",
//   Place:"Nalgonda"
// }
//   ]
//   return (

//     <>
//   {/* <Props Name="Sai Kamal" Age="23" Place="Dwaraka"/>
//   <Props Name="krishna" Age="23" Place="Warangal" />
//   <Props Name="shiva" Age="23" Place=" Mulugu Warangal"/> */}
//    {
//     users.map(
//       (u)=>{
//         return <Props key={u.id} Id={u.id} Name={u.Name} Age={u.Age} Place={u.Place}/>
//       }
//     )
//    }
//   </>
   
//   );
// }

// export default App;
