import React from 'react';

/*Стили*/
import '../css/section4.css';

/*Изображения*/
import stars from '../img/stars.png';

class Section4 extends React.Component{

    clickHandler = (e) =>{
        e.preventDefault();
        let over = document.querySelector('.over');
        let backg = document.querySelector('.darkbg');
        let bodyHeight = document.querySelector('.App').offsetHeight;

        if(over.style.display == 'none'){
            over.style.display = 'block';
            backg.style.height = bodyHeight +   'px';
            backg.style.display = 'block';
            over.style.top = (window.pageYOffset + 100) + 'px';
        } else {
            over.style.display = 'none';
        }
    }

    render(){
        return(
            <section id="dateView">
                <h4>Доступная съемка в ближайшее время</h4>
                <div id="chooseTime">
                    <div className="timesHeader">Пятница, 14 сентября</div>
                    <div className="times">
                        <ul>
                            <li>15:00 - 18:00</li>
                            <li className="nomob">1500Р</li>
                            <li className="mob"><b>850$</b></li>
                            <li>Осталось — 1 место</li>
                        </ul>
                        <button className="timesBtn" onClick={this.clickHandler}>
                            Выбрать
                        </button>
                    </div>
                    <div className="times">
                        <ul>
                            <li>19:00 - 22:00</li>
                            <li className="nomob">1500Р</li>
                            <li className="mob"><b>850$</b></li>
                            <li>Осталось — 1 место</li>
                        </ul>
                        <button className="timesBtn" onClick={this.clickHandler}>
                            Выбрать
                        </button>
                    </div>
                    <div className="reviews">
                        <span>Более 50 отзывов с оценкой <img src={stars} alt="" class="star"/></span>
                    </div>
                    <div className="reviewsmob">
                        <span>Более 150 отзывов с оценкой <img src={stars} alt="" class="star"/></span>
                    </div>
                </div>
                <div style={{ clear: 'both'}}></div>
            </section>
        );
    }
}

export default Section4;