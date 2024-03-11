import { Link } from 'react-router-dom'
import { useContext } from 'react';
import italiaLogo from '../../images/Italia_logo_only.svg'
import italiaLogoBlack from '../../images/Italia_logo_dark.svg'

import { UserContext } from '../Context/UserContext';

export default function Header(props){
    const {userContextData, setUserContextData} = useContext(UserContext)

    const {isLoggedIn, changeCategory, menuCategories} = props;

    const createMenu = (item) => {
        return (
            <li key={item.id} onClick={() => {changeCategory(item)}} className='header__category'>{item.category}</li>
        )
    }

    return(
        <header className='header'>
            <img src={isLoggedIn  ? italiaLogoBlack : italiaLogo} alt="italia restaurant logo" />
            {isLoggedIn &&  <ul className='header__categories'>
               {menuCategories.map((category) => (
                createMenu(category)
               ))}
            </ul>}
            {isLoggedIn && <div className='header__profile-button'>
                <p>Hello, {userContextData.name}</p>
            </div>}
            {!isLoggedIn && <Link className='header__button' to='/signin'>ORDER NOW</Link>}
        </header>
    )
}