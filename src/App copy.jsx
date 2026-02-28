import React from 'react'
import Page from './Page'
import Page2 from './Page2'
import Project from './Project.jsx'
 import {BrowserRouter as Router,Routes , Route} from "react-router-dom";
import Potpolio from './Potpolio.jsx';
import Login from './Login.jsx';
import Random from './Random.jsx';
import Contact from './Contact.jsx';
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Fan from './Fan.jsx';



const App = () => {
  return (
    <div >
     
      <Router>
         <Navbar/> 
        <Routes>
           
            <Route path='/' element={<Page/>}/>
            <Route path='/Project' element={<Project/>}/>
            <Route path='/Potpolio' element={<Potpolio/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Page' element={<Page/>}/>
            <Route path='/Random' element={<Random/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Skills' element={<Skills/>}/>
             <Route path='/Fan' element={<Fan/>}/>
            
           
        </Routes>
        
      </Router> 
      
      
       
     
      
      
     
      
    </div>
  )
}

export default App
