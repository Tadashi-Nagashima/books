import './style.css'
import perfil from '../../assets/perfil.svg'
import sacola from '../../assets/sacola.svg'

const icones = [perfil, sacola]

function IconesHeader(){
    return(
        <ul className='Opcoes-icones'>
          {icones.map((icone) =>(
              <li className='Icone'><img src={icone}></img></li>
            ))}
        </ul>
    )
}

export default IconesHeader