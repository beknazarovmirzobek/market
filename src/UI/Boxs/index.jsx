// @flow 
import * as React from 'react';
import "./style.css"

function index({element}) {
    return (
        <div className="cards" style={{backgroundImage:`url(${element.element.image})`,backgroundSize:"100%",width:"250px",height:"121px"}}>          
        </div>
    );
};
export default index;