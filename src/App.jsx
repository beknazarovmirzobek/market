import React,{ useContext, useState,createContext,useEffect } from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Доставка from "./components/Доставка";
import Оплата from "./components/Оплата";
import Контакты from "./components/Контакты";
import Заказы from "./components/Заказы";
import Просмотр_заказа from "./components/Заказы (Просмотр заказа)";
import Получатель from "./components/Оформление заказа/получатель";
import Error from "./components/Error";
import Избранное from "./components/Избранное";
import Корзина from "./components/Корзина";
import Подкатегория from "./components/Подкатегория";
import Товар from "./components/Товар";
import ProductsSubcategory from "./components/Products-subcategories";
import Private from "./Private/Private.jsx";
import Войти from "./components/Войти";
import Регистрация from "./components/Регистрация";
import context from "./context.jsx";
import КодИзСмс from "./components/Код из смс";
import {data} from "./components/Регистрация";
import Адрес from "./components/Оформление заказа/адрес";
import Оплаты from "./components/Оформление заказа/способ оплаты";
import Подтверить from "./components/Оформление заказа/подтверить заказ"
import language from "./lang/language";
import req from "./API/API/API";
import logOut from "./API/auth/LogOut";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const UserContext=createContext();

function App() {
  
  const [logout,setLogout]=useState(true);
  // async function fetchData(){
  //   const response=await req.getPosts();
  //   console.log(response);
  // }
  const [lang,setLang]=useState('ru');

  const token=localStorage.getItem("token");

  return (<>
  
  
  <context.Provider value={{logout,setLogout,language,lang,setLang}}>
    {
      logout?<Navbar data={language} lang={lang} setLang={setLang}/>:""
    }

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Доставка" element={<Доставка />} />
        <Route path="/Оплата" element={<Оплата />} />
        <Route path="/Контакты" element={<Контакты />} />
        <Route path="/Заказы" element={<Заказы />} />
        <Route path="/Просмотр_заказа" element={<Просмотр_заказа />} />
        <Route path="/адрес" element={<Адрес />} />
        <Route path="/получатель" element={<Получатель />} />
        <Route path="/оплаты" element={<Оплаты />} />
        <Route path="/подтверить" element={<Подтверить />} />
        <Route path="/Подкатегория" element={<Подкатегория />} />
        <Route path="/Подкатегория/Продукты-подкотегории" element={<ProductsSubcategory />} />
        <Route path="/Подкатегория/Продукты-подкотегории/Товар" element={<Товар />} />
        <Route path="/Войти" element={<Войти />} />
        <Route path="/Регистрация" element={<Регистрация/>}/>
        <Route path="/КодИзСмс" element={<КодИзСмс data={data}/>}/>
        <Route path="/Избранное" element={<Избранное />} />
        <Route path="/Корзина" element={<Корзина />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
    {
      logout?<Footer data={language} lang={lang} setLang={setLang}/>:""
    }
</context.Provider>


  </>
  )
}

export default App
