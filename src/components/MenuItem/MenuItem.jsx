export default function MenuItem({item}){
    return (
        <>
            <li className='menu__item'>
                <div>
                    <p>{item.name}</p>
                    <p>US${item.price}</p>
                </div>
                <button>View/Add</button>
            </li>
            <hr />
        </>
    )
} 