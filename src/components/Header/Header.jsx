import { Link } from 'react-router-dom'
import italiaLogo from '../../images/Italia_logo_only.svg'
import italiaLogoBlack from '../../images/Italia_logo_dark.svg'

export default function Header(props){
    const {isLoggedIn, menuArray} = props;
    console.log(menuArray)

    const createCategories = (item) =>{
        return (
            <li className='header__category'>{item.name}</li>
        )
    }

    return(
        <header className='header'>
            <img src={isLoggedIn  ? italiaLogoBlack : italiaLogo} alt="italia restaurant logo" />
            {isLoggedIn &&  <ul className='header__categories'>
                <li className='header__category'>Appetizers</li>
                <li className='header__category'>Pasta</li>
                <li className='header__category'>Pizza</li>
                <li className='header__category'>Dessert</li>
                <li className='header__category'>Beverages</li>
            </ul>}
            {isLoggedIn && <div className='header__profile-button'>
                <p>Hello, altomizawa</p>
            </div>}
            {!isLoggedIn && <Link className='header__button' to='/signin'>ORDER NOW</Link>}
        </header>
    )
}