import React from 'react';

//icons
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

//css
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/26578158?s=460&u=05a84d9e858b2518d15891d19213611346486830&v=4" alt="Jonathan de Toni"/>
                <div>
                    <strong>Jonathan de Toni</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/> Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;