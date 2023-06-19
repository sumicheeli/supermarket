import React from 'react'
import { BrowserRouter,Form,Route,Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Homepg from './Home'
import About from './About'
import Contact from './Contact'
import Forms from './Form'
import Service from './Services'
import Product from './Product'
function Path() {
  return (
    <div>
<BrowserRouter>
<Routes>
    <Route path='/'element={<Signup/>}></Route>
    <Route path='/'element={<Login/>}></Route>
    <Route path='/home'element={<Homepg/>}></Route>
    <Route path='/about'element={<About/>}></Route>
    <Route path='/contact'element={<Contact/>}></Route>
    <Route path='/Service'element={<Service/>}></Route>
  <Route path='/pro'element={<Product/>}></Route>
    <Route path='/from'element={<Forms/>}></Route>
    <Route path='/lo'element={<Login/>}></Route>
    <Route path='/log'element={<Login/>}></Route>
    

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Path