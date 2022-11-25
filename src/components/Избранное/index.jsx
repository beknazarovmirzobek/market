import React ,{useContext,useEffect} from 'react';
import Card from "../../UI/favorites_card";
import card1 from "../../assets/img/card-img-1.png";
import {Navigate} from "react-router-dom";
import context from "../../context"; 
import Auth from "../../API/auth/auth";

function index() {
    const {setLogout,logout}=useContext(context);
    setLogout(true);

    const getData=async()=>{
    try{
        const res=await Auth.getLike();
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

    getData();

    return (
        <>
        {(!localStorage.getItem('token'))?<Navigate to="/Войти"/>:""}
        <section>
            <div className="container pt-5">
                <h1>Избранное</h1>
                <div className="cards_body d-inline-flex">
                    <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                    <Card obj={{ "img": `${card1}`, "title": "Ламинат Woodstock Premium 833 Дуб шервуд медовый" }} />
                </div>
            </div>
        </section>
        </>
    );
}

export default index;