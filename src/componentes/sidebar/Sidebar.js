import './Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar_navegation">
           <div className="logo">
             <a href="">
                <img src={logoSpotify} alt="Logo Spotify"/>
             </a>
           </div>
            <ul>
                <li>
                    <a href="">
                        <span><FontAwesomeIcon icon={faHome}/></span>
                        <span>Ínicio</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span className="fa fa-search"></span>
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div className="library">
            <div className="library_content">
                <button className="library_button">
                    <span><FontAwesomeIcon icon={faSearch}/></span>
                    <span>Sua Biblioteca</span>
                </button>

                <span className="fa fa-plus"></span>
            </div>
            
            <section className="section_playlist">
                <div className="section_playlist_content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar!</span>
                    <button className="section_playlist_button">
                        <span>Criar Playlist</span>
                    </button>
                </div>
            </section>
            <div className="cookies">
                <a href="">Cookies</a>
            </div>
            <div className="languages">
                <button className="languages_button">
                    <span><FontAwesomeIcon icon={faGlobe}/></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
};

export default Sidebar;