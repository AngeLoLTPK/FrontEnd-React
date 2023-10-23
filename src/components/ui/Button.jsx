import './button.css'

const Button = ({ children, cor, ...rest }) => {

    return (
        <>
        {
            cor === "primary" ? 
            <button {...rest} className='primary'>{children}</button>
             : 
            null    
        } {
            cor === "secondary" ? 
            <button {...rest}  className='secondary'>{children}</button>
            :
            null
        }
        </>
    )
}

export default Button;