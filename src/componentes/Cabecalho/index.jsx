import logo from './logo.png'
import search from './search.png'
import './Cabecalho.scss'

export default function Cabecalho(){
    return(
        <header className='cabecalho'>
            <img src={logo} alt="Logo Alura Space" />
            <div className='cabecalho__container'>
                <input className='cabecalho__input' type="text" placeholder="O que você procura?"/>
                <img src={search} alt="Icone de lupa" />
            </div>
        </header>
    )
}