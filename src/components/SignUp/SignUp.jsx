import {useState, useEffect} from 'react'
import italiaLogo from '../../images/Italia_logo_only.svg'
import FormInput from '../FormInput/FormInput'


export default function SignUp(){
    const [formData, setFormData] = useState({
        username: '',
        password: '', 
    })

    //Validate form fields
    const [isFormValid, setIsFormValid] = useState(false);

    const formValidation = () => {
        if (formData.password === formData.confirmPassword && formData.password > 4) {
            setIsFormValid(true);
        } else {setIsFormValid(false);}
    }

    useEffect(formValidation),[formData]


    //Create Input object
    const inputs = [
        {
            id: 1, 
            name: 'email',
            type: 'text',
            placeholder: 'Email', 
            label: 'Email',
            errorMessage: "It should be a valid e-mail address",
            pattern: 'John',
            required: true,

        },
        {
            id: 2, 
            name: 'password',
            type: 'password',
            placeholder: 'Password', 
            label: 'Password',
            // pattern: '12345',
            required: true,
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
        },
        {
            id: 3, 
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password', 
            label: 'Confirm Password',
            errorMessage: "Passwords don't match",
            // pattern: formData.password,
            required: true,

        },

    ]

    //Listen to input changes
    const onChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    
    //Send Form
    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
    }

    return(
        <>
            <div className='sign-in'>
                <img src={italiaLogo} alt="italia restaurant logo" />
                <div className='sign-in__modal'>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        {inputs.map((input) => 
                            (<FormInput
                                key={input.id}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                onChange={onChange}
                                errorMessage={input.errorMessage}
                            />)
                        )}              
                        {/* <a className='sign-up__show-password'
                            onClick={showPassword}>Show password</a> */}

                        <button className={isFormValid ? 'sign-in__button' : 'sign-in__button sign-in__button_inactive'}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}