import './button.css'

const Button = ({ children, cor }) => {

    return (
        <>
        {
            cor === "primary" ? 
            <button className='primary'>{children}</button>
             : 
            null    
        } {
            cor === "secondary" ? 
            <button className='secondary'>{children}</button>
            :
            null
        }
        </>
    )
}

export default Button;