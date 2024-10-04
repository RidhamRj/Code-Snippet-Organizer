import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Workspace from './pages/workspace'
import LandingPage from './pages/landingPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path='/workspace' element={<Workspace/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
