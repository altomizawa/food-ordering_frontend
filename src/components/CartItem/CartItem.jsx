export default function CartItem ({item}){
    return(
        <>
            <div className='cartItem__left-column'>
                <div className="cartItem__item-details">
                    <p><strong>{item.name}</strong></p>
                    <p>US${item.price}</p>
                    <p>Quantity 1</p>
                </div>
                <button className='cartItem__remove-button'>Remove</button>
            </div>            
            <div className='cartItem__divider'></div>
        </>
    )
}