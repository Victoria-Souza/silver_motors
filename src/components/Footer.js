import '../App.css';
import iconeWhat from '../img/icone_wpp.svg';
import iconePhone from '../img/icone_phone.svg';
import iconeMail from '../img/icone_mail.svg';

export default function Footer(){
    return(
        <div className="footer">
            <div className="Sobre">
                <h2>Sobre a empresa</h2>
                <p>Somos uma empresa que realiza a 
                    venda de carros e motos variados, </p>
                   <p> entregando a melhor qualidade de compra sempre!
                </p>
            </div>
            <div className="contato">
                <h2>Meios de Contato</h2>
                <ul>
                    <li><img src={iconeWhat} alt='Whatsapp'/></li>
                    <li><img src={iconePhone} alt='Facebook'/></li>
                    <li><img src={iconeMail} alt='Instagram'/></li>
                </ul>
            </div>
      </div>
    )
}