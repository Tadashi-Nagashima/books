import perfil from '../../assets/perfil.svg'
import sacola from '../../assets/sacola.svg'
import styled from 'styled-components'

const icones = [perfil, sacola]

const IconeContainer = styled.li`
    margin-right: 40px;
    width: 25px;
`
const IconeHeaderContainer = styled.ul`
    display: flex;
    align-items: center;
`

function IconesHeader(){
    return(
        <IconeHeaderContainer>
          {icones.map((icone) =>(
              <IconeContainer><img src={icone}></img></IconeContainer>
            ))}
        </IconeHeaderContainer>
    )
}

export default IconesHeader