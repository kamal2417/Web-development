import React from 'react'
let Skills=[{id:1,lan:"HTML"},{id:2,lan:"CSS"},{id:3,lan:"JS"}];
function List() {
  return (
    <div>
    {
        Skills.map(
            (p)=>
                // <a href="#" key={p.id}>{p.lan}</a>
            <li key={p.id}>{p.lan}</li>
        )
    }
    </div>
  )
}

export default List


// import React from 'react';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Navbar from './Profile/Navbar.jsx'
// import Home from './Profile/Home';
// import About from './Profile/About';
// import Contact from './Profile/Contact';
// import Skills from './Profile/Skills';
// import Projects from './Profile/Projects';
// import Minor from './Profile/Minor.jsx';
// import Major from './Profile/Major.jsx';
// import Todos from './Profile/Query.jsx';
// import List from './Ram3/List.jsx';
// function Error(){
// return(
//   <>
//   <h6>Page not found....</h6>
//   <p>404 error...</p>
//   </>
// )
// }

// function App() {
//   return (
//     <>
//     <Router>
//       <Navbar/>
//       <Routes>
//       <Route path='/Home' element={<Home/>}/>
//       <Route path='/About' element={<About/>}/>
//       <Route path='/Contact' element={<Contact/>}/>
//       <Route path='/Skills' element={<Skills/>}/>
//       <Route path='/Projects' element={<Projects/>}>
//         <Route path='Minor' element={<Minor/>}/>
//         <Route path='Major' element={<Major/>}/>
//         </Route>
//      <Route path='Todos/:id'element={<Todos/>}/>
//      <Route path='*' element={<Error/>}/>
//       </Routes>
//     </Router>
//     <List/>
//     </>
//   );
// }

// export default App;
