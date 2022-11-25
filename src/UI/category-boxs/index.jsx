import React from 'react';
import boxsimg from "../../assets/img/category-boxs-img.svg";
import "./style.css"

function index() {
    return (
        <div className="box" style={{backgroundImage:`url(${boxsimg})`}}>
            <p className="text-dark fw-bold">Мойка для кухни с смесителем</p>
            <p className="text-dark fw-bold fs-5">559000 UZS</p>
            <button className="box_btn-green">В корзину</button>
        </div>
    );
}

export default index;