export default function MenuItem({item, handlePopup}){
    return (
        <>
            <li className='menuItem'>
                <div>
                    <p>{item.name}</p>
                    <p>US${item.price}</p>
                </div>
                <button
                    value={item.name}
                    onClick={()=>{handlePopup(item)}}    
                >View/Add</button>
            </li>
            <hr className='menuItem__line'/>
        </>
    )
} 