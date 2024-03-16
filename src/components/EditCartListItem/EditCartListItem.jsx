export default function EditCartListItem(props) {
    const {item, removeFromCart, addToCart} = props
        return(
            <li className='editCartListItem__item'>
                <img src={item.link} />
                <p><b>{item.name} </b><br></br>
                    {/* Quantity: {item.quantity} <br></br> */}
                    Price: US${item.price}</p>
                <div className='editCartListItem__quantity-wrapper'>
                    <button className='editCartListItem__quantity-button' onClick={() => {removeFromCart(item)}}>-</button>
                    <p>{item.quantity}</p>
                    <button className='editCartListItem__quantity-button'onClick={() => {addToCart(item)}}>+</button>
                </div>
                <div className='editCartListItem__divider'></div>
            </li>

        )
}