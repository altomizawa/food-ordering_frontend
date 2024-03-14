import { Link } from 'react-router-dom';


export default function EditCartPopup(props) {
    const {setIsEditCartOpen, addToCart, removeItemFromCart, calculateTotalPrice, isEditCartOpen, currentCart} = props;  

    const ListItem = (props) => {
        const {item} = props
        return(
            <li className='editCartPopup__item'>
                <img src={item.link} />
                <p><b>{item.name} </b><br></br>
                    {/* Quantity: {item.quantity} <br></br> */}
                    Price: US${item.price}</p>
                <div className='editCartPopup__quantity-wrapper'>
                    <button className='editCartPopup__quantity-button' onClick={() => {removeItemFromCart(item)}}>-</button>
                    <p>{item.quantity}</p>
                    <button className='editCartPopup__quantity-button'onClick={() => {addToCart(item)}}>+</button>
                </div>
                <div className='editCartPopup__divider'></div>
            </li>

        )
    }

    const EmptyCart = () => {
        return (
            <div className='editCartPopup__empty-message'>
                <h2>THERE'S NOTHING HERE</h2>
                <p>Add some items and come back</p>
            </div>
        )
    }

    return(
       <div className={isEditCartOpen ? 'editCartPopup editCartPopup_active' : 'editCartPopup'}>
            <div className='editCartPopup__card'>
                <h2 className='editCartPopup__title'>Edit your order</h2>
                <ul className='editCartPopup__items'>
                    {currentCart.length === 0 ? EmptyCart() : 
                        currentCart.map((item) => (
                            <ListItem key={item._id} item={item}/>
                        ))
                    }
                </ul>
                <div className="editCartPopup__footer">
                    <h3>TOTAL: US${calculateTotalPrice}</h3>
                    <div>
                        <button className='editCartPopup__button' onClick={() => {
                            setIsEditCartOpen(false)
                            } }>VOLTAR</button>
                        <Link to="/checkout"><button className='editCartPopup__checkout-button'>CHECKOUT</button></Link>
                    </div>
                </div>
                
            </div>
       </div>
    )
}