import { Outlet, Navigate } from "react-router-dom"

export default function ProtectedRoute( {isLoggedIn} ){
    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/signin" />
    )
}