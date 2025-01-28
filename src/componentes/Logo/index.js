import './style.css'
import logo from '../../assets/logo.svg'

function Logo(){
    return(
        <div className='Logo'>
            <img 
            src={logo} 
            alt='logo' 
            className='Logo-img'
            ></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo;