import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faPlay } from '@fortawesome/free-solid-svg-icons'
import AboutImg from '../../assets/img/d8c181a0794b89822cdf99b311127031.png'
import Location from '../../assets/img/location.png'
import Calendar from '../../assets/img/calendar.png'
import Key from '../../assets/img/key.png'
import Car1 from '../../assets/img/6c1d8510b5c7098349eb27b1334c70fe.png'
import Car2 from '../../assets/img/car3png.png'
import Car3 from '../../assets/img/car6.png'
import Car4 from '../../assets/img/car4.png'
import Car5 from '../../assets/img/car5.png'
import Car6 from '../../assets/img/car2.png'
import Car7 from '../../assets/img/car8.png'
import Car8 from '../../assets/img/car7.png'


export const HomePage = () => {
    return (
        <main>


            <section id="about">
                <h1>About us</h1>
                <div className="content">
                    <div className="text">
                        <p>
                            We pride ourselves at being able to get our customer into the car that they want, and more
                            importantly, at they price they are looking for. We maintain outstanding customer service by
                    listening to our customers and making sure that we meet their needs.<br /><br /> Even if you don't
                    buy from
                    us, we will offer free advice on whe to look for when buying a used car or truck. Our philosophy
                    is to accomodate you, the customer, with outstanding service while providing you the highest
                    quality automobile needs at wholesale prices. <br /><br />We have a wide selection of vehicles and
                    the
                    expertise to deal with what you are looking for.
                </p>
                    </div>
                    <div className="img">
                        <img src={AboutImg} alt="car" />
                    </div>
                </div>
            </section>

            <section id="benefit">
                <div className="benefit">
                    <div className="circle1">
                        <div> </div>
                    </div>
                    <div className="circle2">
                        <div></div>
                    </div>
                    <h1>
                        All the benefits you will get<br /> when you shop with us
            </h1>
                    <p>Take advantage of everything you can have now by buying your new car at Prime Car</p>
                    <div className="content">
                        <div className="item1">
                            <div className="img">
                                <img src={Location} alt="location" />
                            </div>
                            <div className="text">
                                <h3>Several Headquarters</h3>
                                <p>You can find several Prime Car stores around the United States! Find the store closest to
                            you now</p>
                            </div>
                        </div>

                        <div className="item2">
                            <div className="img">
                                <img src={Calendar} alt="location" />
                            </div>
                            <div className="text">
                                <h3>Several Headquarters</h3>
                                <p>You can find several Prime Car stores around the United States! Find the store closest to
                            you now</p>
                            </div>
                        </div>

                        <div className="item3">
                            <div className="img">
                                <img src={Key} alt="location" />
                            </div>
                            <div className="text">
                                <h3>Several Headquarters</h3>
                                <p>You can find several Prime Car stores around the United States! Find the store closest to
                            you now</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id="car">
                <div className=".car">
                    <h1>The cars that are hot right now</h1>
                    <p>Buy yours and be the most stylish in the neighborhood</p>
                    <div className="content">
                        <div className="item">
                            <div className="img"><img src={Car1} alt="car" /></div>
                            <div className="img"><img src={Car2} alt="car" /></div>
                            <div className="img"><img src={Car3} alt="car" />
                                <div className="text">
                                    <h2> Tesla Model 3</h2>
                                    <p>Disruptive, avant-garde, futuristic, innovative.</p>
                                    <button>Contact</button>

                                </div>
                            </div>
                            <div className="img"><img src={Car4} alt="car" /></div>
                            <div className="img"><img src={Car5} alt="car" /></div>
                            <div className="img"><img src={Car6} alt="car" /></div>
                            <div className="img"><img src={Car7} alt="car" /></div>
                            <div className="img"><img src={Car8} alt="car" /></div>
                        </div>


                    </div>
                </div>
            </section>

            <section id="video">
                <div className="video">
                    <div className="circle1">
                        <div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="circle2">
                        <div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className="text">
                        <h1>Be amazed by <br /> the power</h1>
                        <p>Speed and economy together in one place, use and abuse your car's potential.</p>
                    </div>

                    <div className="img">
                        <img src={Car7} alt="car" />
                        <div className="icon">
                            <i><FontAwesomeIcon icon={faPlay} /></i>
                        </div>
                    </div>


                </div>
            </section>

        </main>
    );
};