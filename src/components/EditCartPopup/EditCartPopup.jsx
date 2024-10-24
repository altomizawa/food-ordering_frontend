import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import './EditCartPopup.css';


import EditCartListItem from '../EditCartListItem/EditCartListItem';


export default function EditCartPopup(props) {
    const {setIsEditCartOpen, addToCart, removeFromCart, calculateTotalPrice, isEditCartOpen, currentCart, closeModal} = props;  
    const {cart} = useContext(AuthContext)
    const EmptyCart = () => {
        return (
            <div className='editCartPopup__empty-message'>
                <h2>THERE'S NOTHING HERE</h2>
                <p>Add some items and come back</p>
            </div>
        )
    }

    return(
       <div onClick={closeModal} className={isEditCartOpen ? 'editCartPopup editCartPopup_active' : 'editCartPopup'}>
            <div className='editCartPopup__card'>
                <h2 className='editCartPopup__title'>Edit your order</h2>
                <ul className='editCartPopup__items'>
                    {currentCart.length === 0 ? EmptyCart() : 
                        currentCart.map((item) => (
                            <EditCartListItem key={item._id} item={item} removeFromCart={removeFromCart} addToCart={addToCart} />
                        ))
                    }
                </ul>
                <div className="editCartPopup__footer">
                    <h3>TOTAL: US${calculateTotalPrice}</h3>
                    <div>
                        <button className='editCartPopup__button' onClick={() => {
                            setIsEditCartOpen(false)
                            } }>VOLTAR</button>
                        <Link to="/checkout" className={`${cart.length===0 && 'editCartPopup__checkout-button-wrapper'}`}><button className={`editCartPopup__checkout-button ${cart.length===0 && 'editCartPopup__checkout-button_inactive'}`}>CHECKOUT</button></Link>
                    </div>
                </div>
                
            </div>
       </div>
    )
}