import {Route, Routes} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

import Home from '../Home/Home'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Menu from '../Menu/Menu'

const isLoggedIn = false;


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/menu' element={<Menu isLoggedIn={isLoggedIn} />} />
    </Routes>
  )
}

export default App
