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
                    <h3 className="pt-3">{title}</h3>
                    <div className="">
                        <button className="btn m-0 p-0"><img src={btn_next} alt="" /></button>
                        <button className="btn m-0 p-0"><img src={previous_next} alt="" /></button>
                    </div>
                </div>
                <hr className=" border-3 " />
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