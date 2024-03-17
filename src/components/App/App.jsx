import {Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Home from '../Home/Home'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Menu from '../Menu/Menu'
import Checkout from '../Checkout/Checkout'
import ErrorPage from '../ErrorPage/ErrorPage'

import * as auth from '../../utils/auth'

import { AuthContext } from '../Context/AuthContext'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cart, setCart] = useState(cartFromLocalStorage)
  const [token, setToken] = useState(localStorage.getItem('token'))

  // CHECK IF THERE'S A TOKEN
  async function tokenCheck() {
    if(token) {
      handleLogin();
    } else {console.log('no token')}

  }

  // Handle successful login
  const handleLogin = async () => {
    try {
      const data = await auth.getContent(localStorage.getItem('token'))
      setUser(data);
      setIsLoggedIn(true);
      navigate('/menu')
    } catch (err) {console.log(err)}
  }

  useEffect(() =>{
    tokenCheck();
  },[])

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn, user: user, setUser: setUser,cart: cart, setCart: setCart}}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn handleLogin={handleLogin} setToken={setToken} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}/>}>
          <Route path='/menu' element={<Menu />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/404' element={<ErrorPage />} />
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
