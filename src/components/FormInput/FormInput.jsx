export default function FormInput(props){
    const {onChange, id, errorMessage, ...inputProps} = props;

    return(
        <>
            <input {...inputProps} onChange={onChange} />
            <span className="input__error-message">{errorMessage}</span>
        </>)        
}
