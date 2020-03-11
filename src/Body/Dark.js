import React from 'react';


class Dark extends React.Component{

    byebyebg = () => {
        let backbg = document.querySelector('.darkbg');
        let over = document.querySelector('.over');

        if(backbg.style.display == 'block'){
            backbg.style.display = 'none';
            over.style.display = 'none';
        }
    }

    render(){
        return(
            <div className="darkbg" onClick={this.byebyebg}>
            </div>
        );
    }
}

export default Dark;