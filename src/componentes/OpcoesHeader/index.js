import styled from 'styled-components'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Opcoes = styled.ul`
    display: flex;
`

const OpcoesItem = styled.li`
min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
  
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

function OpcoesHeader(){
    return(
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <OpcoesItem className='Opcoes-item'><p>{texto}</p></OpcoesItem>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader