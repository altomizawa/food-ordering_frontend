import { Link } from 'react-router-dom';

import api from '../../utils/api'

export default function EditCartPopup(props) {
    const {cart, setIsEditCartOpen, handleRemoveItem, calculateTotalPrice, isEditCartOpen, currentCart} = props;

    // map each item and find in database
    // currentCart.map( async (item) => {
    //     const menuItem = await api.getItemById(item.id)
    //     console.log(menuItem)
    // })
  

    const ListItem = (props) => {
        const {item} = props
        return(
            <li className='editCartPopup__item'>
                <img src={item.link} />
                <p><b>{item.name} </b><br></br>
                    Quantity: {item.quantity} <br></br>
                    Price: US${item.price}</p>
                <button onClick={() => {handleRemoveItem(item)}}>Remove</button>
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