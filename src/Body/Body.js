import React from 'react';
import '../css/body.css';

import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Map from './Map.js';
import Section6 from './Section6.js';

class Body extends React.Component{
    render(){
        return(
            <div className="body">

                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Map />
                <Section6 />

            </div>
        );
    }
}

export default Body;