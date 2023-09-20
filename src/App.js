import React from 'react'
import Nested from './nested'
import Home from './home'
import Profile from './profile'
import About from './about'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Product from './product'
import Service from './service'
import './style.css';


const App=() =>{
  return (
    <div >
      <BrowserRouter>
      <Home/>
      <Routes>
       
          
          
        

          <Route path="/nested"  element={<Nested/>}>
          <Route path="product"  element={<Product/>}/>
          <Route path="service"  element={<Service/>}/>
          <Route  path="profile" element={<Profile/>}/>
          <Route  path="about" element={<About/>}/>
          </Route>



       

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App