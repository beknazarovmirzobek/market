import React from 'react';
import "./style.css";
import img from "../../assets/img/category-box-img.png";


function index({obj}) {
    return (
        <div className="category">
            <p className="text-dark fw-bold category-title">{obj.title}</p>
            <img src={obj.img} alt="img" className="category_img"/>
        </div>
    );
}

export default index;