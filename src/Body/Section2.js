import React from 'react';

/*Стили*/
import '../css/section2.css';

/*Изображения*/
import photo1 from '../img/photo1.png';
import photo2 from '../img/photo2.png';
import photo3 from '../img/photo3.png';
import photo4 from '../img/photo4.png';
import photo5 from '../img/photo5.png';
import photo6 from '../img/photo6.png';
import photo7 from '../img/photo7.png';
import photo8 from '../img/photo8.png';
import arrow from '../img/Arrow.svg';

class Section2 extends React.Component{


    /*Надо допидить слайдер
    slider = () => {
        if(document.documentElement.clientWidth <= 320){
            let allPhoto = document.querySelector('#allPhoto');
            allPhoto.style.left = -292 + 'px';
        }
    }*/

    render(){
        return(
            <section id="section-photo">
                
                <div style={{ clear: 'both'}}></div>
                <h4>Фотографии пакета</h4>
                <div id="allPhoto" onClick={this.slider}>
                    <img src={photo1} alt="" class="photo"/>
                    <img src={photo2} alt="" class="photo"/>
                    <img src={photo3} alt="" class="photo"/>
                    <img src={photo4} alt="" class="photo"/>
                    <img src={photo5} alt="" class="photo"/>
                    <img src={photo6} alt="" class="photo"/>
                    <img src={photo7} alt="" class="photo"/>
                    <img src={photo8} alt="" class="photo"/>
                </div>

                <div style={{ clear : 'both'}}></div>
                <div id="viewallphoto" className="nomob">
                    <a href><img src={arrow} /> Показать все фото <img src={arrow} /></a>
                </div>
                
                <div style={{ clear : 'both'}}></div>
            </section>
        );
    }
}

export default Section2;