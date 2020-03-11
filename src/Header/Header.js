import React from 'react';
import '../css/header.css';
import toplogo from '../img/HELYFLY2.png';
import proc from '../img/group6.png';
import login from '../img/login.svg';

class Header extends React.Component{

    clickHandler = () =>{
        let over = document.querySelector('.over');
        let backg = document.querySelector('.darkbg');
        let bodyHeight = document.querySelector('.App').offsetHeight;

        if(over.style.display == 'none'){
            over.style.display = 'block';
            over.style.top = (window.pageYOffset + 50) + 'px';
            backg.style.height = bodyHeight + 'px';
            backg.style.display = 'block';
        } else {
            over.style.display = 'none';
        }
    }

    render(){
        return(
            <header>
                <div className="top-headerline">
                    <img src={toplogo} id="logoHell"/>
                    <span>телефон: </span>
                    <a href="tel:88001231212" id="phone">8(800)-123-12-12</a>
                    <div className="mob" id="city"><a href="#">Москва</a></div>
                    <img src={login} className="mob" id="login" />
                </div>
                <div className="logo">
                    <h2>Эксклюзивная <b>фотосессия</b> при полете на вертолете</h2>
                    <div className="logo-price">
                        <span className="logo-price-text">Стоимость</span>
                        <span className="logo-price-cost">1500Р</span>
                        <img className="logo-price-proc" src={proc} />
                    </div>
                    <div style={{ clear: 'both'}}></div>
                    <button className="reserv" id="reservHeader" onClick={this.clickHandler}>
                        Забронировать место
                    </button>
                    <div style={{ clear: 'both'}}></div>
                </div>
                <div style={{ clear: 'both'}}></div>
            </header>

        );
    }
}

export default Header;