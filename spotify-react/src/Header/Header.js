import React from 'react'
import './Header.css';

import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import searchIcon from '../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header_navigation">
                <div className="navigation">
                    <button className="arrow_left">
                        <img src={smallLeft} alt="botão de voltar"/>
                    </button>
                    <button className="arrow_right">
                        <img src={smallRight} alt="botao de avançar"/>
                    </button>
                </div>

                <div className="header_search">
                    <img src={searchIcon}/>
                    <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir agora?"/>
                </div>

                <div className="header_login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
        </nav>
    );
};

export default Header;