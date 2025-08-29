import './Button.css'

const Button = ({ children, onClick, variant, type='button'}) => {
  console.log(variant)
  // variant = 'primary' | 'secondary' | 'tertiary'
  return (
    <button type={type} className={`custom-button custom-button--${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
