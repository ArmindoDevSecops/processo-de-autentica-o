//import { useState } from 'react'
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import Cadastro from './pages/cadastro/Index'
import Login from './pages/Login/Index'
import Home from './pages/Home/Index'

import './App.css'

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route  path='/cadastro' element={<Cadastro/>}  />
     <Route  path='/' element={<Login/>}  />
     <Route  path='/hoome-page' element={<Home/>}  />
   </Routes>
   </BrowserRouter>
  )
}

export default App
