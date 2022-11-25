import React from 'react';
import like from "../../assets/img/discount 3.png";
import del from "../../assets/img/delete.png";
import "./CardStyle.css";

function basket_card({card}) {
    return (
        <>
            <div className="basked_cards d-flex border py-3 mb-2">
                <div className="card_l text-center">
                    <img src="" alt=""/>
                </div>
                <div className="card_c h-100 position-relative">
                    <h3 className="fS-20">{card.title}</h3>
                    <div className="position-absolute bottom-0">
                    <button className="btn p-0"><img src={like} alt="" className="w-75"/></button>
                    <button className="btn"><img src={del} alt=""/></button>
                    </div>
                </div>
                <div className="card_r h-100 position-relative ">
                    <div className="position-absolute bottom-0">
                        <h5 className="fS-20">{card.price} uzs</h5>
                        <div className="number_of_products d-flex px-2">
                            <button className="border-0 ps-2 number_color fw-bold fs-5">-</button>
                            <p className="number_color px-3 mt-1 fw-bold">1</p>
                            <button className="border-0 number_color fw-bold fs-5">+</button>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default basket_card;