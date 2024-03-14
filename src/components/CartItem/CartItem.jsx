export default function CartItem ({item}){
    return(
        <>
            <div className='cartItem__left-column'>
                <div className="cartItem__item-details">
                    <p><strong>{item.name}</strong></p>
                    <div className='carItem__price-wrapper'>
                    <p className='carItem__price'>Quantity {item.quantity}</p>
                    <p className='carItem__price'>US${item.price}</p>
                    </div>
                    
                </div>
                {/* <button className='cartItem__remove-button' onClick={()=>{handleRemoveItem(item)}}>Remove</button> */}
            </div>            
            <div className='cartItem__divider'></div>
        </>
    )
}