import { Link } from 'react-router-dom'
import italiaLogo from '../../images/Italia_logo_only.svg'
import italiaLogoBlack from '../../images/Italia_logo_dark.svg'

export default function Header(props){
    const {isLoggedIn, menuArray, setCurrentCategory} = props;

    function handleCategoryClick(category) {
        setCurrentCategory(category)

    }
    
    const createMenu = (item) => {
        return (
            <li key={item.id} onClick={() => {handleCategoryClick(item)}} className='header__category'>{item.category}</li>
        )
    }

    return(
        <header className='header'>
            <img src={isLoggedIn  ? italiaLogoBlack : italiaLogo} alt="italia restaurant logo" />
            {isLoggedIn &&  <ul className='header__categories'>
               {menuArray.map((item) => createMenu(item))}
            </ul>}
            {isLoggedIn && <div className='header__profile-button'>
                <p>Hello, altomizawa</p>
            </div>}
            {!isLoggedIn && <Link className='header__button' to='/signin'>ORDER NOW</Link>}
        </header>
    )
}