import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import italiaLogoBlack from '../../images/Italia_logo_dark.svg'
import accountIcon from '../../images/account-icon.svg'


import { AuthContext } from "../Context/AuthContext";
import Sidebar from "../Sidebar/Sidebar";


export default function Navbar(props){
    const navigate = useNavigate();

    // const { logout } = useContext(UserContext)
    const {user, setIsLoggedIn} = useContext(AuthContext)

    const { changeCategory, menuCategories} = props;

    //Control user menu
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
    
    // SET isEditProfileActive
    const [isEditProfileActive, setIsEditProfileActive] = useState(false)
   

    const handleMenuClick = () => {
        openMenu();
    }

    const openMenu = () => {
        setIsUserMenuOpen(true)
    };

    const closeMenu = () => {
        setIsUserMenuOpen(false)
        setIsEditProfileActive(false)
    };

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false);
        navigate('/')
        

    }

    const createMenu = (item) => {
        return (
            <li key={item.id} onClick={() => {changeCategory(item)}} className='navbar__category'>{item.category}</li>
        )
    }

    return(
        <header className='navbar'>
           <Sidebar isUserMenuOpen={isUserMenuOpen} closeMenu={closeMenu} user={user} setIsEditProfileActive={setIsEditProfileActive} handleLogout={handleLogout} isEditProfileActive={isEditProfileActive} />
            <img src={italiaLogoBlack} alt="italia restaurant logo" />
            <ul className='navbar__categories'>
               {menuCategories.map((category) => (
                createMenu(category)
               ))}
            </ul>
            <div className='navbar__profile-button-wrapper'>
                <button className='navbar__profile-name' onClick={handleMenuClick}>Hello, {user.name}</button>
                <button className='navbar__profile-icon' onClick={handleMenuClick}><img src={accountIcon} /></button>
            </div>
        </header>
    )
}