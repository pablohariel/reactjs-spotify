import React from 'react';

import './styles.css';
import Spotify_icon from './spotify.png';
import Facebook_icon from './facebook.png';
import Twitter_icon from './twitter.png';
import Instagram_icon from './instagram.png';
import Brazil_icon from './brazil.png'

function Footer() {
    return (
        <div className="footer-main-div">
            <div className="first-div">   
                <div className="main">
                    <div className="img">
                        <img src={ Spotify_icon } alt=""/>
                    </div>
                    <div className="company-nav">
                        <p>EMPRESA</p>
                        <ul>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Empregos</a></li>
                            <li><a href="#">For the Record</a></li>
                        </ul>
                    </div>
                    <div className="community-nav">
                        <p>COMUNIDADES</p>
                        <ul>
                            <li><a href="#">Para Artistas</a></li>
                            <li><a href="#">Desenvolvedores</a></li>
                            <li><a href="#">Marcas</a></li>
                            <li><a href="#">Investidores</a></li>
                            <li><a href="#">Fornecedores</a></li>
                        </ul>
                    </div>
                    <div className="links-nav">
                        <p>LINKS ÚTEIS</p>
                        <ul>
                            <li><a href="#">Ajuda</a></li>
                            <li><a href="#">Player da Web</a></li>
                            <li><a href="#">Aplicativo móvel grátis</a></li>
                        </ul>
                    </div>
                </div>
                <div className="social-media">
                    <img src={ Instagram_icon } alt="Instagram"/>
                    <img src={ Twitter_icon } alt="Twitter"/>
                    <img src={ Facebook_icon } alt="Facebook"/>
                </div>
            </div>
            <div className="second-div">   
                <div className="infos-nav">
                    <ul>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Centro de Privacidade</a></li>
                        <li><a href="#">Política de privacidade</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Sobre anúncios</a></li>
                    </ul>
                </div>
                <div className="nation-nav">
                    <div className="brazil-div">
                        <a href="#">Brasil</a>
                        <img src={ Brazil_icon } alt=""/>
                    </div>
                    <p>@ 2020 Spotify AB</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;