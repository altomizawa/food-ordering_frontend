import { Link } from 'react-router-dom'
import italiaLogo from '../../images/Italia_logo_only.svg'
import italiaLogoBlack from '../../images/Italia_logo_dark.svg'

export default function Header(props){
    const {isLoggedIn, menuArray} = props;

    const categories = [
        {   
            id: 0,
            name: 'Appetizers'

        },
        {   
            id: 1,
            name: 'Pasta'

        },
        {   
            id: 2,
            name: 'Pizza'

        },
        {   
            id: 3,
            name: 'Dessert'

        },
        {   
            id: 4,
            name: 'Beverages'

        },
    ];

    const createMenu = (item) => {
        return (
            <li key={item.id} className='header__category'>{item.name}</li>
        )
    }

    return(
        <header className='header'>
            <img src={isLoggedIn  ? italiaLogoBlack : italiaLogo} alt="italia restaurant logo" />
            {isLoggedIn &&  <ul className='header__categories'>
               {categories.map((item) => createMenu(item))}
            </ul>}
            {isLoggedIn && <div className='header__profile-button'>
                <p>Hello, altomizawa</p>
            </div>}
            {!isLoggedIn && <Link className='header__button' to='/signin'>ORDER NOW</Link>}
        </header>
    )
}