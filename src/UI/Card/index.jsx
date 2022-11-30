import React,{useRef,useState} from 'react';
import "./style.css"
import star from "../../assets/img/star.svg";
import likeImg from "../../assets/img/like_img.svg";
import Auth from "../../API/auth/auth.jsx";

function index(obj) {

    const setLikeFunc=async(e)=>{
        const id=Number(e.target.id);
        const params={
            "product":id,
        }
        try{
            const res=await Auth.setLike(params);
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    };
    
    const [isHovering,setIsHovering]=useState(false)
    const handleMouseOver=()=>{
        setIsHovering(true);
    }
    const handleMouseOut=()=>{
        setIsHovering(false);
    }
    return (<>
        <div className="card_wrapper text-center">
            <div className="pt-3" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className="liked-div">
                    <button className={isHovering ? "like-div":"like-div d-none"} onClick={localStorage.getItem('token')?setLikeFunc:""}>
                        <img src={likeImg} alt="" className="" id={obj.obj.id}/>
                    </button>
                </div>
                <div className="card-box-img">
                    <img src={`https://api.stroymarkets.uz/${obj.obj.image[0].image}`} alt="" className="card-images"/>
                </div>
                <p className="products-card-name">{obj.obj.name}</p>
                <div className="products-card-star">
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>
    <p className="products-card-price"><span className="text-dark fs-5">{obj.obj.price} UZS</span> 1 за {obj.obj.type}</p>
                <p className="products-card-size">В наличии {obj.obj.count} {obj.obj.type}</p>
            </div>
            <div className="card_footer">
                <h3 className="text-light">В корзину</h3>
            </div>
        </div>
    </>
    );
}

export default index;