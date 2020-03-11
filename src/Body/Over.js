import React from 'react';

/*Стили*/
import '../css/over.css';


class Over extends React.Component{
    render(){
        return(
            <div className="over" style={{display : 'none'}}>
                <h4>Бронирование</h4>
                <form>
                    <label for="date1">Дата<span>*</span></label>
                    <input type="date" id="date1"  value="14/02/1992"/>

                    <label for="date2">Email<span>*</span></label>
                    <input type="text" id="date2" placeholder="Электронная почта"/>

                    <label for="name3">Имя<span>*</span></label>
                    <input type="text" id="name3" value="Иван" placeholder="Иван" />

                    <label for="name4">Фамилия<span>*</span></label>
                    <input type="text" id="name4" value="Громов" placeholder="Иванов"/>

                    <label for="name5">Телефон<span>*</span></label>
                    <input type="text" id="name5" placeholder="8(999)4578229" />

                    <label for="name5">Данные карты<span>*</span></label>
                    <input type="text" id="name6" placeholder="Номер карты" />
                    <input type="text" id="name7" placeholder="Срок действия" />
                    <input type="text" id="name8" placeholder="CVV" />
                    
                    <input type="checkbox" id="agree"/><label for="agree" id="agreelabel">Я согласен с пользовательским соглашением и публичной офертой</label>
                    <div style={{ clear: 'both'}}></div>
                    <button id="endBooking">Забронировать</button>
                </form>
            </div>
        );
    }
}

export default Over;