import React from 'react';
import '../css/footer.css';

import toplogo from '../img/HELYFLY2.png';
import vk from '../img/vk.svg';
import facebook from '../img/Facebook.svg';
import instragram from '../img/Instragram.svg';
import ru from '../img/RU.png';
import mc from '../img/MC.svg';
import visa from '../img/VISA.svg';
import arrow from '../img/Arrow.svg';
import pp from '../img/PP.jpg';

const doubleClass1 = 'social nomob';
const doubleClass2 = 'ru nomob';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="topfooter">
                    <img src={toplogo} className="footlogo" />

                    <img src={vk} alt="" className="social" />
                    <img src={facebook} alt="" className="social" />
                    <img src={instragram} alt="" className="social" />
                    <img src={ru} alt="" className={doubleClass1} />
                    <img src={arrow} alt="" className={doubleClass1} />
                    
                </div>
                <div className="botfooter">
                    <img id="mc" src={mc} />
                    <img id="visa" src={visa} />
                    <img id="pp" src={pp} className="mob"/>
                    <img src={ru} alt="" className="mob" />
                    <img src={arrow} alt="" className="mob" />
                    <p>
                        Тех. поддержка: 8(800)700-00-00<br />
                        © 2018 HELYFLY. All Rights Reserved.
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;