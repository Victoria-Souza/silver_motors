import '../App.css';
import iconeUser from '../img/icone_user.svg';


export default function Header(){
    return(
        <header className="App-header">
            <h1>SILVER MOTORS</h1>
            <ul>
            <li className="carros">CARROS</li>
            <li>MOTOS</li>
            </ul>
            <button>
            Entrar
            <img src={iconeUser} alt="Icone de usuário"/>
            </button>
        </header>
    )
}