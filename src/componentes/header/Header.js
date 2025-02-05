import React from "react";
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header_navegation">
        <div className="navegation">
            <button className="arrow_left">
                <img src={smallLeft} alt="Seta para esquerda"/>
            </button>
            <button className="arrow_right">
                <img src={smallRight} alt="Seta para Direita"/>
            </button>
        </div>
        <div className="header_search">
            <img src={search} alt=""/>
            <input id="search_input" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" maxlength="800" placeholder="O que você quer ouvir" value=""/>
        </div>
        <div className="header_login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
        </div>
    </nav>
    )
};

export default Header;
