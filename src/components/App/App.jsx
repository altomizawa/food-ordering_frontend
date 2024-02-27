import {Route, Routes} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

import Home from '../Home/Home'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Menu from '../Menu/Menu'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/menu' element={<Menu />} />
    </Routes>
  )
}

export default App
