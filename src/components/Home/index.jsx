import React, { useState, useEffect, useContext } from 'react';
import Section1 from "../../UI/Section1";
import ProductsCards from "../../UI/ProductsCards";
import req from "../../API/API/API";
import context from "../../context";

function index(props) {
    const {setLogout}=useContext(context);
    setLogout(true);

    const [category, setCategory] = useState([]);
    const [popular, setPopular] = useState([]);
    const [sale, setSale] = useState([]);
    const [best, setBest] = useState([]);

     const fetchData=async()=> {
        const result = await req.getPosts();
        setCategory(result.category);
        setPopular(result.popular);
        setSale(result.sale);
        setBest(result.best);
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <context.Provider value={{ category }}>
                <Section1 />
                <section>
                    <div className="container-box">
                        <ProductsCards obj={popular} title="Popular"/>
                    </div>
                </section>
                <section>
                    <div className="container-box">
                        <ProductsCards obj={sale}  title="Sale"/>
                    </div>
                </section>
                <section>
                    <div className="container-box">
                        <ProductsCards obj={best}  title="Best"/>
                    </div>
                </section>
            </context.Provider>
        </>
    );
}

export default index;