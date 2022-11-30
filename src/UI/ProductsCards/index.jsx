import React,{useContext} from 'react';
import "./style.css";
import btn_next from "../../assets/img/next-btn.png"
import previous_next from "../../assets/img/previous-btn.png"
import Card from "../Card";
import context from '../../context';

function index({obj,title} ) {
    
    return (
        <>
            <div className="Cards">
                <div className="cards__head d-flex justify-content-between w-100">
                    <h3 className="cards_head_title">{title}</h3>
                    <div className="p-0 m-0">
                        <button className="btn-prew"><img src={btn_next} alt="" /></button>
                        <button className="btn-next"><img src={previous_next} alt="" className=""/></button>
                    </div>
                </div>
                <hr className=" border-3 m-0" />
                <div className="cards_body d-inline-flex">
                    {
                        obj.map((obj)=>{
                            return <Card obj={obj} />
                        })
                    }
                    {/* <Card obj={{ "img": `${obj.img}`, "title": `${obj.cardtitle}` }} />
                    <Card obj={{ "img": `${obj.img}`, "title": `${obj.cardtitle}` }} />
                    <Card obj={{ "img": `${obj.img}`, "title": `${obj.cardtitle}` }} />
                    <Card obj={{ "img": `${obj.img}`, "title": `${obj.cardtitle}` }} />
                    <Card obj={{ "img": `${obj.img}`, "title": `${obj.cardtitle}` }} /> */}
                </div>
            </div>
        </>
    );
}

export default index;