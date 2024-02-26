import {useState, useEffect} from 'react'
import italiaLogo from '../../images/Italia_logo_only.svg'


export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false);


    function handleEmailInput(email){
        setEmail(email)
    }
    function handlePasswordInput(password){
        setPassword(password);
        areInputsValid();
    }
    function handleConfirmPasswordInput(confirmPassword){
        setConfirmPassword(confirmPassword);
        areInputsValid();
    }

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(email, password, confirmPassword)
    }

    function areInputsValid(e) {
        if(password === confirmPassword) {
            setIsFormValid(true)
        } else {setIsFormValid(false)}
    }

    return(
        <>
            <div className='sign-in'>
                <img src={italiaLogo} alt="italia restaurant logo" />
                <div className='sign-in__modal'>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleFormSubmit}>
                        <input 
                            type="e-mail" 
                            name="e-mail"
                            id="e-mail" 
                            placeholder='e-mail' value={email} 
                            onChange={
                            (e)=>{handleEmailInput(e.target.value)}} 
                        />

                        <input 
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder='password' 
                            value={password}
                            onChange={
                                (e)=>{handlePasswordInput(e.target.value)}} 
                        />

                        <input type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="confirm-password"
                            placeholder='confirm password'
                            value={confirmPassword}
                            onChange={
                                (e)=>{handleConfirmPasswordInput(e.target.value)}} 
                        />

                        <a className='sign-up__show-password'
                            onClick={() =>{
                            setShowPassword(prevState => !prevState)
                        }}>Show password</a>

                        <button className={isFormValid ? 'sign-in__button' : 'sign-in__button sign-in__button_inactive'}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}