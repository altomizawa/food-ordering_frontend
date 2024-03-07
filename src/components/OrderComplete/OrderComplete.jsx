import { useNavigate } from "react-router-dom"

export default function OrderComplete(props) {
    const navigate = useNavigate();
    const {setIsOrderComplete} = props;

    const handleButtonClick = () =>{
        setIsOrderComplete(false)
        navigate('/menu')
    }



    return (
        <>
            <div className="orderComplete">
                <h1>THANK YOU FOR YOUR ORDER!</h1>
                <p>We will notify you as soon as the your order leaves the restaurant</p>
                <button onClick={handleButtonClick} >BACK</button>
            </div>
        </>
    )
}