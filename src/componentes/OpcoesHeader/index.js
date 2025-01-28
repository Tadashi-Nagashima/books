import './style.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader(){
    return(
        <ul className='Opcoes'>
            {textoOpcoes.map((texto) => (
                <li className='Opcoes-item'><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default OpcoesHeader