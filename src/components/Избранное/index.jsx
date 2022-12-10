import React ,{useContext,useEffect,useState} from 'react';
import Card from "../../UI/favorites_card/index";
import card1 from "../../assets/img/card-img-1.png";
import {Navigate} from "react-router-dom";
import context from "../../context"; 
import Auth from "../../API/auth/auth";
import "./style.css";

function index() {
    const {setLogout,logout}=useContext(context);
    setLogout(true);
    const [data1,setData1]=useState([]);

    const getData=async()=>{
        try{
            const res=await Auth.getLike();
            setData1(res.data);
            
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <>
        {(!localStorage.getItem('token'))?<Navigate to="/Войти"/>:""}
        <section>
            <div className="container-box">
                <h1 className="liked_h1">Избранное</h1>
                <div className="cards_body d-inline-flex">
                    {
                        (data1.length>0?
                        data1.map((el,i)=>{
                            const data=el.product;
                            return <Card obj={data}/>
                        }):"")
                        
                    }
                </div>
            </div>
        </section>
        </>
    );
}

export default index;