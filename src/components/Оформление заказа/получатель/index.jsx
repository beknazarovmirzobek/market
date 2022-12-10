import React ,{useContext,} from 'react';
import {NavLink,useNavigate} from "react-router-dom";
import "./style.css";
import context from "../../../context";
import logo from "../../../assets/img/Логотип.png";

function index(props) {
    const navigate=useNavigate();
    const { logout, setLogout } = useContext(context);
    setLogout(false);
    return (
        <>
            <section>
                <div className="recipient_header">
                    <div className="container-box">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className="container-box">
                    <div className="recipient_body d-flex">
                        <div className="recipient_body-left">
                            <h1 className="recipient_body-left__title">Получатель</h1>
                            <input type="text" name=""  placeholder="Имя и фамилия" className="recipient_body-left__adres"/>
                            <input type="text" name=""  placeholder="Телефон" className="recipient_body-left__adres"/>
                            <div className="recipient_body-left_footer d-flex justify-content-between align-items-center">
                                <NavLink to="/адрес" href="#" className="recipient_body-left_footer_back text-decoration-none">Назад</NavLink>
                                <button className="btn-recipient" onClick={()=>{navigate("/оплаты")}}>Дальше</button>
                            </div>
                        </div>
                        <div className="recipient_body-right">
                            <div className="recipient_body-right-order">
                                <h2 className="recipient_body-right_total">Итого <span>23 799 000 uzs</span></h2>
                                <p className="recipient_body-right_text">Всего: 2 товара <span>790кг</span></p>
                                <p className="recipient_body-right_text">Доставка: <span>0 uzs</span></p>
                                <NavLink to="/адрес" className="recipient_body-right__btn text-decoration-none">Перейти к оплате</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;