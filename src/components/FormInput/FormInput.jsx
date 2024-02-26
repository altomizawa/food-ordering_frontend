export default function FormInput(props){
    const {label, onChange, id, ...inputProps} = props;

    return(
        <>
            <input {...inputProps} onChange={onChange}/>
        </>)
            
}
