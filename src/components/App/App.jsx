import {Route, Routes } from 'react-router-dom'
// import { useContext, useEffect, useState } from 'react'

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Home from '../Home/Home'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Menu from '../Menu/Menu'
import Checkout from '../Checkout/Checkout'
import ErrorPage from '../ErrorPage/ErrorPage'

// import { AuthContext } from '../Context/AuthContext'
// import { UserContext } from '../Context/UserContext'

// import { getContent } from '../../utils/auth'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const { setUserContextData} = useContext(UserContext)
  // const loggedUser = null;

//   // CHECK FOR TOKEN
//   const tokenCheck = () => {
//     // const token = localStorage.getItem('token')
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVmMzAwMjFlNWMxOTZkOWU2MTYxNDY2IiwiZW1haWwiOiJhbHlzc29udG9taXphd2FAaG90bWFpbC5jb20iLCJpYXQiOjE3MTA0MjU4MjgsImV4cCI6MTcxMDQ0MzgyOH0.NDCmy855n4hNdUWFd7ahFxj0_YO1_sB9FQKuIIfPids'
//     if(token) {
//       handleLogin(token);
//     }
//     return;
// }

//   //HANDLE LOGIN
//   const handleLogin = async (token) => {
//       try{
//           const userData = await getContent(token)
//           console.log(userData)
//           loggedUser = userData;
//           // sendToContext(userData)
//           // setUserContextData(userData)
//           // setIsLoggedIn(true)
//       } catch {console.log('error')}
//   }

//   // CHECK OF EXISTING TOKEN
//   useEffect(() => {
//     tokenCheck();
//   }),[]

  return (
    // <AuthContext.Provider value={isLoggedIn}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/menu' element={<Menu />} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/404' element={<ErrorPage />} />
      </Routes>
    // </AuthContext.Provider>
  )
}

export default App
