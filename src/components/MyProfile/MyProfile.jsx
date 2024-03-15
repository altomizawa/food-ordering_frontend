import { useState, useContext } from "react"

import { AuthContext } from "../Context/AuthContext";

export default function MyProfile(props) {
    const [nameInput, setNameInput] = useState(null);
    const {user, setUser} = useContext(AuthContext);

    const {isEditProfileActive, setIsEditProfileActive} = props;

    const handleInputChange = (e) => {
        setNameInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // SEND CHANGE TO SERVER

        // UPDATE PROFILE CONTEXT
        console.log(nameInput)
        // RESET FIELD
        setNameInput('')        
        // CLOSE FORM
        setIsEditProfileActive(false)
    }

    return (
        <form onSubmit={handleSubmit} className={isEditProfileActive ? 'myProfile myProfile_active' : 'myProfile'}>
            <input className='myProfile__input' placeholder={user.name} onChange={handleInputChange} value={nameInput}></input>
            <div className='myProfile__button-wrapper'>
                <button onClick={() => {setIsEditProfileActive(false)}} className="myProfile__button">cancel</button>
                <button className="myProfile__button">submit</button>
            </div>
        </form>
        
    )
}