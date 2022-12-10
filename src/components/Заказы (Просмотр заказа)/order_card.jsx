import React from 'react';
import "./order_card.css";
import like from "../../assets/img/discount 3.png";
import del from "../../assets/img/Корзина.png";

function order_card({card}) {
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
                    </div>
                </div>
                <div className="card_r h-100 position-relative">
                    <div className="position-absolute bottom-0">
                        <h5 className="card_r-price">{card.price} uzs</h5>
                        <div className="d-flex justify-content-end">        
                            <button className="btn p-0"><img src={del} alt="" className="w-75"/></button>   
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default order_card;