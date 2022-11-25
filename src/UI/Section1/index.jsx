// @flow
import * as React from 'react';
import "./style.css";
import Boxs from "../../UI/Boxs";
import img1 from "../../assets/img/bg-img-1.png";
import img2 from "../../assets/img/bg-img-2.png";
import img3 from "../../assets/img/bg-img-3.png";
import img4 from "../../assets/img/bg-img-4.png";
import img5 from "../../assets/img/bg-img-5.png";
import img6 from "../../assets/img/bg-img-6.png";
import img7 from "../../assets/img/bg-img-7.png";
import img8 from "../../assets/img/bg-img-8.png";
import img9 from "../../assets/img/bg-img-9.png";
import img10 from "../../assets/img/bg-img-10.png";
import Кнопка from "../../assets/img/Кнопка следующий.png";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import context from '../../context';

function index() {
    const {category}=useContext(context);
    return (
        <section>
            <div className="section-1">
                <div className="container-fluid d-flex justify-content-between pt-4">
                    <div className="boxs1">
                        <div className="d-flex justify-content-between">
                            {
                                category.map((element,i)=>{
                                    return <NavLink to="/Подкатегория">
                                        <Boxs element={{element}} />
                                    </NavLink>
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* <button className="btn next"><img src={Кнопка} alt="" /></button> */}
            </div>
        </section>
    );
};
export default index;

