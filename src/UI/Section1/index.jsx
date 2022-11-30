// @flow
import * as React from 'react';
import "./style.css";
import Boxs from "../../UI/Boxs";
import Кнопка from "../../assets/img/Кнопка следующий.png";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import context from '../../context';

function index() {
    const {category}=useContext(context);
    return (
        <section>
            <div className="section-1">
                <div className="container-box d-flex justify-content-between pt-4">
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

