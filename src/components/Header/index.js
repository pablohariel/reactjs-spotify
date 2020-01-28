import React from 'react';

import './styles.css';
import Logo from './test.png';

function Header() {
    return (
        <header>
            <div className="header-itens">
                <img src={ Logo } />
                <ul>
                    <li><a href="#">Premium</a></li>
                    <li><a href="#">Ajuda</a></li>
                    <li><a href="#">Baixar</a></li>
                    <li id="imSpecial">| </li>
                    <li><a href="#">Inscrever-se</a></li>
                    <li><a href="#">Entrar</a></li>
                </ul>
            </div>
            
        </header>
    );
}

export default Header;