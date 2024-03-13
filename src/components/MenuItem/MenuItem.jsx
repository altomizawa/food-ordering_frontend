export default function MenuItem({item, handlePopup}){
    return (
        <>
            <li className='menuItem'>
                <p>{item.name}</p>
                <div>
                    <p className="menuItem__price">US${item.price}</p>
                    <button
                        className="menuItem__button"
                        value={item.name}
                        onClick={()=>{handlePopup(item)}}    
                    >view / add</button>
                </div>
            </li>
            <hr className='menuItem__line'/>
        </>
    )
} 