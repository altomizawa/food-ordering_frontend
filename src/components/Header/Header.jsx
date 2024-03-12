import { Link } from 'react-router-dom'
import italiaLogo from '../../images/Italia_logo_only.svg'

export default function Header(){
    return(
        <header className='header'>
            <img src={italiaLogo} alt="italia restaurant logo" />
            <Link className='header__button' to='/signin'>ORDER NOW</Link>
        </header>
    )
}