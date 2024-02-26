import {useEffect, useState} from 'react'
import italiaLogo from '../../images/Italia_logo_only.svg'
import FormInput from '../FormInput/FormInput';


export default function SignIn(){
    const [formData, setFormData] = useState({
        username: '',
        password: '', 
    })

    //Validate form fields
    const [isFormValid, setIsFormValid] = useState(false);

    const formValidation = () => {
        if (formData.username.length>3 && formData.password.length > 3) {
            setIsFormValid(true);
        } else {setIsFormValid(false);}
    }

    const validateEmail = (email) => {
        if (email.length > 0) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email) ? '' : 'Please enter a valid email address.';}
    }

    useEffect(formValidation),[formData]



    const inputs = [
        {
            id: 1, 
            name: 'username',
            type: 'text',
            placeholder: 'Username', 
            label: 'Username',
            required: true,
            errorMessage: validateEmail(formData.username)
        },
        {
            id: 2, 
            name: 'password',
            type: 'password',
            placeholder: 'Password', 
            label: 'Password',
            required: true,
        },

    ]

    const onChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
    }

    return(
        <>
            <div className='sign-in'>
                <img src={italiaLogo} alt="italia restaurant logo" />
                <div className='sign-in__modal'>
                    <h2>Enter your Account</h2>
                    <form onSubmit={handleSubmit}>
                        {inputs.map(input => (
                            <FormInput
                            key={input.id}
                            {...input}
                            value={formData[input.name]}
                            onChange={onChange} />
                        ))}
                        <button className={isFormValid ? 'sign-in__button' : 'sign-in__button sign-in__button_inactive'}>Submit</button>
                    </form>
                    <p>Not a member? <a>Sign up now!</a></p>
                </div>
            </div>
        </>
    )
}