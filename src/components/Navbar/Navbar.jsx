import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import italiaLogoBlack from '../../images/Italia_logo_dark.svg'
import accountIcon from '../../images/account-icon.svg'

import { AuthContext } from "../Context/AuthContext";


export default function Navbar(props){
    const navigate = useNavigate();

    // const { logout } = useContext(UserContext)
    const {user} = useContext(AuthContext)

    const { changeCategory, menuCategories} = props;

    //Control user menu
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
   

    const handleMenuClick = () => {
        openMenu();
    }

    const openMenu = () => {
        setIsUserMenuOpen(true)
    };

    const closeMenu = () => {
        setIsUserMenuOpen(false)
    };

    const handleLogout = () => {
        localStorage.removeItem('token')
        // logout();
        navigate('/')
        

    }

    const createMenu = (item) => {
        return (
            <li key={item.id} onClick={() => {changeCategory(item)}} className='navbar__category'>{item.category}</li>
        )
    }

    return(
        <header className='navbar'>
            <div className={isUserMenuOpen ? 'navbar__profile' : 'navbar__profile navbar__profile_hidden'}>
                <div className='navbar__container'>
                    <button className='navbar__close-button' onClick={closeMenu}><p>close</p></button>
                    <img src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x"></img>
                    <p className="navbar__profile-name">{user.name}</p>
                    <ul>
                        <li><a className="navbar__profile-link">edit profile</a></li>
                        <li><a className="navbar__profile-link">past orders</a></li>
                        <li><a className="navbar__profile-link" onClick={handleLogout}>logout</a></li>
                    </ul>
                </div>
                
            </div>
            <img src={italiaLogoBlack} alt="italia restaurant logo" />
            <ul className='navbar__categories'>
               {menuCategories.map((category) => (
                createMenu(category)
               ))}
            </ul>
            <div className='navbar__profile-button'>
                <button className='navbar__profile-name' onClick={handleMenuClick}>Hello, {user.name}</button>
                <button className='navbar__profile-icon' onClick={handleMenuClick}><img src={accountIcon} /></button>
            </div>
        </header>
    )
}