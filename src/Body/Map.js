import React from 'react';

/*Стили*/
import '../css/map.css';
/*Изображения*/
import round from '../img/round1.png';
import left from '../img/arrowleft.png';
import right from '../img/arrowright.png';
import smallround from '../img/smallround.png';
import smallroundorange from '../img/smallroundorange.png';
import ellipse from '../img/Ellipse.png';

class Section5 extends React.Component{
    render(){
        return(
            <section className="yaMap">
                <div class="map">

                    <div className="mapbox">
                        <div className="mapbox-li">
                            <h5>Где встречаемся?</h5>
                            <p>Москва</p>
                        </div>
                        <div className="mapbox-li">
                            <h5>Время съемки</h5>
                            <p>3 часа</p>
                        </div>
                        <div className="mapbox-li">
                            <h5>Мест осталось:</h5>
                            <p>2 места</p>
                        </div>
                        <div className="mapbox-li">
                            <h5>Мария Иванова</h5>
                            <p>Фотограф</p>
                            <a href=''>Показать больше информации</a>
                        </div>
                    </div>

                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1011a7e8e42dc75aa3fdd5c891ec150e1f6bea7f7699ffd134077532c4bbd464&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
                </div>
                <div className="whereare">
                    <img src={left} className="leftarrow" />
                    <img src={round} className="round" />
                    <img src={right} className="rightarrow" />
                    
                    <h5>Где встречаемся?</h5>
                    <p>Москва</p>
                    <div className="roundsmallbox">
                        <img src={smallroundorange} className="roundsmall" />
                        <img src={smallround} className="roundsmall" />
                        <img src={smallround} className="roundsmall" />
                    </div>

                    <div className="authorInfo">
                        <img src={ellipse} alt="Marina" />
                        <h5>Марина Иванова</h5>
                        <span>Фотограф</span>
                        <a href=''>Показать больше<br /> информации <br /> об авторе</a>
                        
                <div style={{ clear : 'both'}}></div>
                    </div>
                    
                <div style={{ clear : 'both'}}></div>
                </div>
            </section>
        );
    }
}

export default Section5;