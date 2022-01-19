import '../App.css';
import iconeWhat from '../img/icone_wpp.svg';
import iconeFace from '../img/icone_face.svg';
import iconeInst from '../img/icone_instagram.svg';
import iconePhone from '../img/icone_phone.svg';
import iconeMail from '../img/icone_mail.svg';
import iconeHouse from '../img/icone_house.svg';

export default function footer(){
    return(
        <div>
            <footer>
                <div className="redes_sociais">
                <ul>
                    <li><img src={iconeWhat} alt='Whatsapp'/></li>
                    <li><img src={iconeFace} alt='Facebook'/></li>
                    <li><img src={iconeInst} alt='Instagram'/></li>
                </ul>
                </div>

                <div className="contato">
                <ul>
                    <li><img src={iconePhone} alt='Telefone'/></li>
                    <li><img src={iconeMail} alt='E-mail'/></li>
                    <li><img src={iconeHouse} alt='Endereço'/></li>
                </ul>
                </div>
            </footer>
      </div>
    )
}