import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer>
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12154.165817155126!2d49.861333313930736!3d40.39685439596935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8c2cbf267a83fbd!2zSGV5ZMmZciDGj2xpeWV2IE3JmXJryZl6aQ!5e0!3m2!1str!2s!4v1665927325085!5m2!1str!2s"
                height="200"  loading="lazy"></iframe>
        </div>
        <div className="text">
            <div className="logo">
                <h1> PRIME CAR</h1>
            </div>

            <div className="item">
                <h3>Where are we</h3>
                <ul>
                    <li>Georgis</li>
                    <li>Turkey</li>
                    <li>Azerbaijan</li>
                    <li>Russian</li>
                    <li>America</li>
                </ul>
            </div>

            <div className="item">
                <h3>Quick links</h3>
                <ul>
                    <li>About us</li>
                    <li>Our Services</li>
                    <li>Contact Us</li>

                </ul>
            </div>

            <div className="item">
                <h3>Contact Us</h3>
                <ul>
                    <li>contact@primecar.com</li>
                </ul>
            </div>


            <div className="item">
                <h3>Call Us</h3>
                <ul>
                    <li>+999-9-999-9999 </li>
                    <li>+111-11-111-1111</li>
                    <li className="icon"><i> <FontAwesomeIcon icon={faFacebook} /></i>
                        <i > <FontAwesomeIcon icon={faLinkedin} /></i>
                        <i > <FontAwesomeIcon icon={faInstagram} /></i>
                    </li>
                </ul>
            </div>
        </div>

        <div className="bottom">
            <div className="main">
                <p>Privacy policy</p>
                <p>Term and conditions</p>
            </div>
            <div>
                <p> Copyright © 2022 Flick Tech. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  );
};