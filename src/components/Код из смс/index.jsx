import React , {useState,useContext} from 'react';
import "./style.css";
import logotip from "../../assets/img/Логотип.png";
import context from "../../context";

function index(props) {
    const {setLogout,number}=useContext(context);
    console.log(number);
    setLogout(false);
    console.log(props.phone)
    const [phone,setPhone]=useState('');
    const [code,setCode]=useState('');

    const getSms=async(e)=>{
       
        e.preventDefault();
        const params={
            "phone":phone,
            "sms_code":code
        }

        try{
            const res=await Auth.setSms(params);
            console.log(res);
            // window.location.replace("/");
        }
        catch(err){
            console.log(err);
            
        }  
    };

    return (
        <>
            <div className="box-Sms">
                <div className="Sms">
                    <img src={logotip} alt="" className="text-light"/>
                    <h1 className="">Введите код из смс.
                        Мы отправили его на номер
                        +{phone}</h1>
                    <form method="post">
                        <input type="text" name="s" required="required" />
                        <button type="submit" className="btn-green" onSubmit={getSms} >Далее</button>
                        <button type="submit" className="btn-gray" >Отправить код еще</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default index;