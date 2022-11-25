import React,{useRef,useState} from 'react';
import "./style.css"
import star from "../../assets/img/star.svg";
import likeImg from "../../assets/img/like_img.svg";
import Auth from "../../API/auth/auth.jsx";

function index(obj) {


    const setLikeFunc=async(e)=>{
        const id=Number(e.target.id);
        const params={
            "product":id
        }
        console.log(params);
        try{
            const res=await Auth.setLike(params);
            console.log(res.response.data);
        }
        catch(err){
            console.log(err.response.data);
            
        }
    };

    return (<>
        <div className="card text-center">
            <div className="card_body pt-3">
                <button className="like-div" onClick={localStorage.getItem('token')?setLikeFunc:""}><img src={likeImg} alt="" className="" id={obj.obj.id}/></button>
                <div className="card-box-img">
                    <img src={`https://api.stroymarkets.uz/${obj.obj.image[0].image}`} alt="" className="card-images"/>
                </div>
                <p className="fs-6 pt-2 m-0">{obj.obj.name}</p>
                <div className="my-2">
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>
                <p className="m-0 fw-bold text-secondary"><span className="text-dark fs-5">{obj.obj.price} UZS</span> за 1 м2</p>
                <p className="">В наличии 60 м2</p>
            </div>
            <div className="card_footer">
                <h3 className="text-light">В корзину</h3>
            </div>
        </div>
    </>
    );
}

export default index;