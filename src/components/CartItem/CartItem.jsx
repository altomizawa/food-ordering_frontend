import { useContext } from "react"

 import { UserContext } from "../Context/UserContext"

export default function CartItem ({item}){
    const {handleRemoveItem, currentCart} = useContext(UserContext)

    return(
        <>
            <div className='cartItem__left-column'>
                <div className="cartItem__item-details">
                    <p><strong>{item.name}</strong></p>
                    <p>Quantity {item.quantity}</p>
                    <p>US${item.price}</p>
                    
                </div>
                {/* <button className='cartItem__remove-button' onClick={()=>{handleRemoveItem(item)}}>Remove</button> */}
            </div>            
            <div className='cartItem__divider'></div>
        </>
    )
}