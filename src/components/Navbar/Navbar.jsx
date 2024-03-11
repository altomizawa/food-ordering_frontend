import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import italiaLogoBlack from '../../images/Italia_logo_dark.svg'
import { UserContext } from "../Context/UserContext";

export default function Navbar(props){
    const {userContextData, logout } = useContext(UserContext)

    const { changeCategory, menuCategories} = props;

    //Control user menu
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
   

    const handleMenuClick = () => {
        openMenu();
        console.log(isUserMenuOpen)

    }

    const openMenu = () => {
        setIsUserMenuOpen(true)
    };

    const closeMenu = () => {
        setIsUserMenuOpen(false)
    };
  
  

    const createMenu = (item) => {
        return (
            <li key={item.id} onClick={() => {changeCategory(item)}} className='navbar__category'>{item.category}</li>
        )
    }

    return(
        <header className='navbar'>
            <div className={isUserMenuOpen ? 'navbar__profile' : 'navbar__profile navbar__profile_hidden'}>
                <div className="navbar__container">
                    <button className='navbar__close-button' onClick={closeMenu}>close</button>
                    <img src="https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x"></img>
                    <ul>
                        <li><a className="navbar__profile-link">my profile</a></li>
                        <li><a className="navbar__profile-link">past orders</a></li>
                        <li><a className="navbar__profile-link">logout</a></li>
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
                <button onClick={handleMenuClick}>Hello, {userContextData.name}</button>
            </div>
        </header>
    )
}