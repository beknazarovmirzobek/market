import React , {useState,useContext} from 'react';
import "./style.css";
import logotip from "../../assets/img/Логотип.png";
import context from "../../context";
import {useNavigate} from "react-router-dom";
import Auth from "../../API/auth/auth";

function index({data}) {
    const {setLogout,number}=useContext(context);
    setLogout(false);
    const navigate=useNavigate();

    const [code,setCode]=useState('');

    const getSms=async(e)=>{
       
        e.preventDefault();
        const params={
            "phone":data.phone,
            "sms_code":code
        }
        console.log(params);

        try{
            const res=await Auth.setSms(params);
            navigate("/");
        }
        catch(err){
            console.log(err);
            navigate("/КодИзСмс");
            
        }  
    };

    return (
        <>
            <div className="box-Sms">
                <div className="Sms">
                    <img src={logotip} alt="" className="text-light"/>
                    <h1 className="">Введите код из смс.
                        Мы отправили его на номер
                        +{data.phone}</h1>
                    <form method="post" onSubmit={getSms}>
                        <input type="text" name="s" required="required" onChange={(e)=>setCode(e.target.value)}/>
                        <button type="submit" className="btn-green" >Далее</button>
                        <button type="submit" className="btn-gray" >Отправить код еще</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default index;