import React from 'react';
import "./style.css";
import img from "../../assets/img/removebg-preview 1.png"
import rating from "../../assets/img/rating_green.png"

function index({obj}) {
    return (
        <div className="paginate__card">
            <img src={obj.img} alt="img" />
            <div className="paginate__card__info pt-4">
                <div className="d-flex">
                    <div className="rating position-relative">
                        <img src={rating} alt="" />
                        <p className="rating_indicator">{obj.rating}</p>
                    </div>
                    <h4 className="paginate__card__title">{obj.title}</h4>
                </div>
                <p className="m-0 fontS pt-2"><span>{obj.reviews}</span> отзывов</p>
                <div className="w-100 d-flex justify-content-between pt-3">
                    <div className="paginate__card__infos">
                        <p className="m-0 fontS text-dark">{obj.info}</p>
                    </div>
                    <div className="paginate__card-price">
                        <p className="fs-5 fw-semibold text-dark right-0">{obj.price} uzs</p>
                        <button className="paginate__btn-green fw-bold fontS">В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;