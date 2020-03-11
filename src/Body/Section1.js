import React from 'react';

/*Стили*/
import '../css/section1.css';

/*Изображения*/
import videoimg from '../img/64379962_2432401366817580_2945589636799915800_n.png';
import stars from '../img/stars.png';

class Section1 extends React.Component{

    video = () => {
        let vidos = document.querySelector('#videoblock');
        let imaga = document.querySelector('#video-img');

        imaga.style.display = 'none';
        
        let newVidos = document.createElement('iframe'); //Создаем для того чтобы была возможность установить autoplay
        newVidos.src = "https://www.youtube.com/embed/HwVh8pmOot4?autoplay=1";
        newVidos.setAttribute('width', '100%');
        newVidos.setAttribute('height', '100%');
        newVidos.setAttribute('frameboard', '1');
        newVidos.style.borderRadius = '6px';
        newVidos.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');

        vidos.append(newVidos);
    }

    render(){
        return(
            <section id="video">
                <h2>Фотосессия в вертолете</h2>
                <div className="left">
                    
                    <p>
                        Полет на вертолете это прекрасная возможность получить новые ощущения! 
                        А наш замечательный фотограф запечатлит лучшие моменты
                    </p>
                    <ul className="nomobul">
                        <li className="video-list">3 часа съемки</li>
                        <li className="video-list">Более 50 фотографий</li>
                        <li className="video-list">Москва</li>  
                        <li className="video-list">Готовы ответить на любые вопросы</li>
                    </ul>
                    
                    <ul className="mobul">
                        <li className="video-list-mob">3 часа съемки</li>
                        <li className="video-list-mob">Русский</li>
                        <li className="video-list-mob">от <b>850$</b></li>  
                        <li className="video-list-mob">Дубаи</li>  
                        <li className="video-list-mob">Более 50 фотографий</li>
                    </ul>

                    <div className="reviews">
                        <span>Более 50 отзывов с оценкой <img src={stars} alt="" class="star"/></span>
                    </div>
                    <div className="reviewsmob">
                        <span>Более 150 отзывов с оценкой <img src={stars} alt="" class="star"/></span>
                    </div>
                </div>
                <div className="right" id="videoblock" onClick={this.video}>
                    <img id="video-img" src={videoimg} style={{ display: 'block'}}/>
                    <iframe id="vidos" width="100%" style={{ display: 'none'}} height="100%" src="https://www.youtube.com/embed/HwVh8pmOot4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <div style={{ clear : 'both'}}></div>
            </section>
        );
    }
}

export default Section1;