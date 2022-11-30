import React from 'react';
import "./style.css";
import star from "../../assets/img/star.svg";
import favorite from "../../assets/img/favorite.png";

function index({obj}) {
    const baseURL="https://api.stroymarkets.uz";
    const cardData=obj[0];
    console.log(baseURL+cardData.image[0].image);
    
    return (<>
        <div className="card text-center">
            <div className="card_body pt-3">
                <p className="float-end pe-4 pb-2"><img src={favorite} alt="favorite"/></p>
                <div className="liked-div">
                    <button className="like-div">
                        <img src={baseURL+cardData.image[0].image} alt="" className=""/>
                    </button>
                </div>
                <p className="fs-6 pt-2 m-0">{cardData.name}</p>
                <div className="my-2">
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>
    <p className="m-0 fw-bold text-secondary"><span className="text-dark fs-5">{cardData.price} UZS</span> {cardData.type}</p>
                <p className="text-success">В наличии 5 шт</p>
            </div>
            <div className="card_footer">
                <h3 className="text-light">В корзину</h3>
            </div>
        </div>
        </>
    );
}

export default index;