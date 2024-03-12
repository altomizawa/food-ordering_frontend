import { Link} from "react-router-dom";
import { useState } from "react";

import myCart from "../../database/mycart.json"
import MenuItem from "../MenuItem/MenuItem"
import CartItem from '../CartItem/CartItem'
import OrderComplete from "../OrderComplete/OrderComplete";

import backgroundImage from '../../images/joao-vitor-duarte-k4Lt0CjUnb0-unsplash.jpg';
import visaLogo from '../../images/visa-logo.png'
import mastercardLogo from '../../images/mastercard-logo.png'
import paypalLogo from '../../images/paypal-logo.png'
import gpayLogo from '../../images/gpay-logo.png'


export default function Checkout() {

    const [isOrderComplete, setIsOrderComplete] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('form sent')
        setIsOrderComplete(true)
    }

    return(
        <>  
            <div className="checkout">
            {/* <img className='checkout__background' src={backgroundImage} alt="background image of paper texture" /> */}
                <div className="checkout__left-column">
                    {myCart.map((item) => (<CartItem key={item.name} item={item} />))}
                    <h2>TOTAL:</h2>
                </div>
                <div className='checkout__right-column'>
                    <h1>COMPLETE YOUR ORDER</h1>
                    <form onSubmit={handleFormSubmit} className='checkout__personal-details'>
                        <h2 className='checkout__payment-h2'>Personal Details</h2>
                        <div className='checkout__payment-line'>
                            <input placeholder="First name"></input>
                            <input placeholder="Last name"></input>
                        </div>
                        <div className='checkout__payment-line'>
                            <input placeholder="email"></input>
                            <input placeholder="phone number"></input>
                        </div>
                        <h2 className='checkout__payment-h2'>Payment Details</h2>
                        <div className="checkout__payment-logos">
                            <img  className='checkout__payment-logo' src={visaLogo} alt="visa logo" />
                            <img  className='checkout__payment-logo' src={mastercardLogo} alt="mastercard logo" />
                            <img  className='checkout__payment-logo' src={paypalLogo} alt="{PayPal} logo" />
                            <img  className='checkout__payment-logo' src={gpayLogo} alt="google pay logo" />
                        </div>
                        <div className='checkout__payment-line'>
                            <input placeholder="Card holder name"></input>
                            <input placeholder="Card number"></input>
                        </div>
                        <div className='checkout__payment-line'>
                            <input placeholder="CVV"></input>
                            <input placeholder="Expiration date"></input>
                        </div>
                        <h2 className='checkout__payment-h2'>Shipping information</h2>
                        <input placeholder="Address line 1"></input>

                        <div className='checkout__payment-line'>
                            <input placeholder="City"></input>
                            <input placeholder="State"></input>
                        </div>
                        <div className='checkout__payment-line'>
                            <input placeholder="Zip Code"></input>
                        </div>
                        <div className='checkout__payment-line'>
                        <Link className='checkout__link' to="/menu"><button type='button' className="checkout__button" >CANCEL</button></Link>
                        <button type='submit' className="checkout__button checkout__button-submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
                {isOrderComplete && <OrderComplete setIsOrderComplete={setIsOrderComplete}></OrderComplete>}
            </div>
            
        </>
       
    )
}