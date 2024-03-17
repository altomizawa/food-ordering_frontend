import { useState, useContext, useEffect } from "react"

import validator from "validator";
import api from "../../utils/api";
import { AuthContext } from "../Context/AuthContext";

export default function MyProfile(props) {
    const [nameInput, setNameInput] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({})

    const {user, setUser} = useContext(AuthContext);

    const {isEditProfileActive, setIsEditProfileActive} = props;

    const validateForm = (nameInput) => {
        const errorsObj = {};
    
        if (validator.isEmpty(nameInput)) {
            setIsFormValid(false);
          errorsObj.name = 'Name is required';
        } else if (!validator.isLength(nameInput, { min: 2, max: 30 })) {
            setIsFormValid(false);
          errorsObj.name = 'Name must be between 2 and 30 characters';
        } else if (!validator.isAlpha(nameInput, 'en-US', { ignore: ' -' })) {
            setIsFormValid(false);
          errorsObj.name = 'Name can only contain letters and spaces';
        } else {setIsFormValid(true)}
    
        setErrors(errorsObj);
      };

    const handleInputChange = (e) => {
        const newName = e.target.value;
        setNameInput(newName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // SEND CHANGE TO SERVER
        api.editProfileName(nameInput, user)
        // UPDATE PROFILE CONTEXT
        .then((updatedUser) => setUser(updatedUser))
        // RESET FIELD
        setNameInput('')        
        // CLOSE FORM
        setIsEditProfileActive(false)
    }

    useEffect(() => {
        validateForm(nameInput);
    }, [nameInput])

    return (
        <form onSubmit={handleSubmit} className={isEditProfileActive ? 'myProfile myProfile_active' : 'myProfile'}>
            <input className='myProfile__input' placeholder={user.name} onChange={handleInputChange} value={nameInput}></input>
            <p style={{color: 'red', textAlign: 'center', fontSize: '0.8rem'}}>{errors.name}</p>
            <div className='myProfile__button-wrapper'>
                <button type="button" onClick={() => {
                    // CLOSE EDIT MODE
                    setIsEditProfileActive(false)
                    // RESET FIELD
                    setNameInput('')  
                    }} className="myProfile__button">cancel</button>
                <button type="submit" className={isFormValid ? "myProfile__button" : 'myProfile__button myProfile__button_inactive'}>submit</button>
            </div>
        </form>
        
    )
}