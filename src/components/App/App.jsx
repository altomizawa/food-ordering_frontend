import {Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Home from '../Home/Home'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Menu from '../Menu/Menu'
import Checkout from '../Checkout/Checkout'



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <Routes>
      <Route path='/' element={<Home isLoggedIn={isLoggedIn} />}/>
      <Route path='/signin' element={<SignIn setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path='/signup' element={<SignUp />} />
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path='/menu' element={<Menu isLoggedIn={isLoggedIn} />} />
        <Route path='/checkout' element={<Checkout isLoggedIn={isLoggedIn}/>} />
      </Route>
    </Routes>
  )
}

export default App
