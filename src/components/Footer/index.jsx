import React from 'react';
import "./style.css";
import адрес from "/src/assets/img/адрес.svg"
import email from "/src/assets/img/email.svg"
import номер from "/src/assets/img/номер.svg"
import время from "/src/assets/img/время.svg"
import start from "/src/assets/img/start.png"
import instagram from "/src/assets/img/instagram.png"
import youtube from "/src/assets/img/youtube-outlined.png"
import telegram from "/src/assets/img/telegram-plane.png"

function index({data,lang,setLang}) {
    
    const t=data[lang];
    return (
        <footer className="footer">
            <div className="container-box">
                <div className="footer-box d-flex justify-content-between">
                    <div className="contact">
                        <h5>{t.our_contacts}</h5>
                        <p>{t.our_about}</p>
                        <p><img src={адрес} alt=""/> г. Ташкент, ул Юнусобод</p>
                        <p><img src={email} alt=""/> StroyMarket@gmail.com</p>
                        <p><img src={номер} alt=""/> +998 (99) 777-77-07</p>
                        <p><img src={номер} alt=""/> +998 (99) 777-77-07</p>
                        <p><img src={время} alt=""/> Пн-Вс. 9:00 - 21:00</p>
                    </div>
                    <div className="buyers">
                        <h5>{t.buyers}</h5>
                        <p>{t.buyers1}</p>
                        <p>{t.buyers2}</p>
                        <p>{t.buyers3}</p>
                        <p>{t.buyers4}</p>
                        <p>Stroy market</p>
                    </div>
                    <div className="subscription">
                        <h5>{t.benefit}</h5>
                        <p>{t.benefit_about}</p>
                        <div className="d-flex">
                            <p className="number fw-bold fs-6 text-dark">+998 <input type="text" className=" border-0 border-start border-dark input-color" id="tell"/></p>
                            <button className="btn-start ms-2"><img src={start} alt=""/></button>
                        </div>
                        <div className="d-flex gap-2 py-2">
                            <button className="social-network"><img src={instagram} alt="instagram"/></button>
                            <button className="social-network background"><img src={youtube} alt="youtube"/></button>
                            <button className="social-network"><img src={telegram} alt="telegram"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default index;