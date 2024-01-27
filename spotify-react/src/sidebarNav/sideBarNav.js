import React from 'react';
import './sideBarNav.css';

import spotifyLogo from '../assets/icons/logo-spotify.png';

const sideBarNav = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar_navigation">
                <div>
                    <a>
                        <div className="logo">
                            <img src={spotifyLogo} alt="Spotify's logo"/>
                        </div>
                    </a>
                </div>

                <ul>
                    <li>
                        <a>
                            <span className="fa fa-home"></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="fa fa-search"></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library_content">
                    <button  className="library_button">
                        <span className="fa fas fa-book"></span>
                        <span>Sua Biblioteca</span>
                    </button>
                    <a  className="add_library">
                        <span className="fa fa-plus"></span>
                    </a>
                </div>
            
                <section className="section-playlist">
                    <div className="section-playlist_content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist_button">
                            <span>Criar Playlist</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <a >Cookies</a>
                </div>
        
                <div className="languages">
                    <button className="languages_button">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>

            </div>
        </div>
    )
};

export default sideBarNav;