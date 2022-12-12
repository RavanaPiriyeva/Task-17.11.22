import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export const Header = () => {
  return (
    <header>

        <nav>
            <div className="navbar">
                <div className="logo">
                    <h1>PrimeCar</h1>
                </div>
                <div className="nav">
                    <ul>
                        <a href="#slider">
                            <li>Home</li>
                        </a>
                        <a href="#about">
                            <li>About</li>
                        </a>
                        <a href="#benefit">
                            <li>Benefits</li>
                        </a>
                        <a href="#car">
                            <li>Cars</li>
                        </a>
                        <a href="#video">
                            <li>Video</li>
                        </a>
                    </ul>
                </div>
                <div>
                    <button>Contact us</button>
                </div>
                <div className="menu">
                    <span><i><FontAwesomeIcon icon={faBars} /></i></span>
                </div>
            </div>
        </nav>
       
        <section id="slider">
            <div className="text">
                <h1>More economy,<br/> same speed </h1>
                <p>The most beloved <br/> cars of the moment for <br/> those who want to <br/> ride in style without <br/>
                    spending too much</p>
                <button>Discover</button>
            </div>
        </section>
     <br/>
    </header>
  );
};