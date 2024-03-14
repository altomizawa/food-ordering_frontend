import { Outlet, Navigate } from "react-router-dom"
import { useContext } from "react"

import { AuthContext } from "../Context/AuthContext"


export default function ProtectedRoute(){
    const {isLoggedIn} = useContext(AuthContext)
    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/signin" />
    )
}