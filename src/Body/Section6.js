import React from 'react';

/*Стили*/
import '../css/section6.css';

/*Изображения*/
import antonova from '../img/antonova.png';
import petrov from '../img/petrov.png';
import carry from '../img/carry.png';
import arrowgreen from '../img/arrowgreen.png';
import stars from '../img/stars.png';
import arrow from '../img/Arrow.svg';

const doubleClass = 'textreviews nomob';

class Section6 extends React.Component{
    render(){
        return(
            <section id="textreviewssecion">
                <h5>Отзывы</h5>
                <div className="textreviews">
                    <div className="reviewAvatar">
                        <img src={antonova} />
                    </div>
                    <div className="reviewInfoUl">
                        <ul>
                                <li className="lireviews"><h6>Валерия Антонова</h6></li>
                                <li><span>Арт-директор</span></li>
                                <li><img src={stars} /></li>  
                                <li><img className="arrowgreen" src={arrowgreen} /> Супер! Я бы заказала съемку снова!</li> 
                        </ul>
                    </div>
                    
                <div style={{ clear: 'both'}}></div>
                    <div className="reviewInfo">
                        <p>
                            Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!
                        </p>
                        <div className="reviewdate">27 Апреля, 2019г.</div>
                    </div>
                </div>
                <div style={{ clear: 'both'}}></div>

                <div className="textreviews">
                    <div className="reviewAvatar">
                        <img src={petrov} />
                    </div>
                    <div className="reviewInfoUl">
                        <ul>
                                <li><h6>Виталий Петров</h6></li>
                                <li><span>Арт-директор</span></li>
                                <li><img src={stars} /></li>  
                                <li><img className="arrowgreen" src={arrowgreen} /> Супер! Я бы заказал съемку снова!</li> 
                        </ul>
                    </div>
                                    <div style={{ clear: 'both'}}></div>
                    <div className="reviewInfo">
                        
                        <p>
                            Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. 
                            Организация полёта отличная. Спасибо!
                        </p>
                        <div className="reviewdate">19 Апреля, 2019г.</div>
                    </div>
                </div>
                <div style={{ clear: 'both'}}></div>

                <div className={doubleClass}>
                    <div className="reviewAvatar">
                        <img src={carry} />
                    </div>
                    <div className="reviewInfoUl">
                        <ul>
                            <li><h6>Джим Керри</h6></li>
                            <li><span>Арт-директор</span></li>
                            <li><img src={stars} /></li>  
                            <li><img className="arrowgreen" src={arrowgreen} /> Супер! Я бы заказал съемку снова!</li> 
                        </ul>
                    </div>
                    <div style={{ clear: 'both'}}></div>
                    <div className="reviewInfo">
                   
                        <p>
                            Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы 
                            с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!
                        </p>
                        <div className="reviewdate">11 Апреля, 2019г.</div>
                    </div>
                    
                </div>
                <div style={{ clear: 'both'}}></div>

                <div className="viewAllReview">
                    <a href="#"><img src={arrow} /> Показать все фото <img src={arrow} /></a>
                </div>
                <div style={{ clear: 'both'}}></div>
            </section>
        );
    }
}

export default Section6;