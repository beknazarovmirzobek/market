import React from 'react';
import like from "../../assets/img/discount 3.png";
import del from "../../assets/img/delete.png";
import "./CardStyle.css";

function basket_card({card}) {
    return (
        <>
            <div className="basked_cards d-flex mb-2">
                <div className="card_l text-center">
                    <img src="" alt=""/>
                </div>
                <div className="card_c h-100 position-relative">
                    <h3 className="card_c_title">{card.title}</h3>
                    <div className="position-absolute bottom-0">
                    <button className="btn p-0"><img src={like} alt="" className="w-75"/></button>
                    <button className="btn"><img src={del} alt=""/></button>
                    </div>
                </div>
                <div className="card_r h-100 position-relative">
                    <div className="position-absolute bottom-0">
                        <h5 className="card_r-price">{card.price} uzs</h5>
                        <div className="number_of_products d-flex">
                            <button className="number_of_products-minus">-</button>
                            <p className="number_of_products-number">1</p>
                            <button className="number_of_products-minus">+</button>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default basket_card;