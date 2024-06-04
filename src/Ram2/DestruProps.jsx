import React from 'react';

function App({Jno,Name,Team,Position,MostRuns}) {
  return (
    <>
   {/* <h4>Jersey Number:{props.Jno}</h4>
   <h4>Name:{props.Name}</h4>
   <h4>Team:{props.Team}</h4>
   <h4>Position:{props.Position}</h4>
   <h4> MostRuns:{props.MostRuns} {props.MostRuns.Format}</h4> */}

<h4>Jersey Number:{Jno}</h4>
   <h4>Name:{Name}</h4>
   <h4>Team:{Team}</h4>
   <h4>Position:{Position}</h4>
   {/* <h4>MostRuns: {MostRuns} </h4> */}
    </>
  );
}

export default App;



// App.js

// import React from 'react';
// import Deprops from './Ram2/DestruProps.jsx';
// let krishna={
//   Jno:45,
//   Name:"Rohith sharma",
//   Team:"Indian Team",
//   Position:[1, "opener and Captain"],
//   MostRuns:{Runs:18239,Format:" Runs In All Formats"}
//  }
// function App() {
//   return (
//       // <Deprops Jno={krishna.Jno} Name={krishna.Name} Team={krishna.Team} Position={krishna.Position} MostRuns={`${krishna.MostRuns.Runs} ${krishna.MostRuns.Format}`}/>
//       <Deprops {...krishna}/>
//   );
// }

// export default App;
