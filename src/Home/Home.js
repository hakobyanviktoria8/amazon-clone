import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import productImg from "../images/product.jpg";

const Home = () => {
    return (
        <div className="home">
            <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
                className="home__image" alt=""
            />
            <div className="home__row">
                <Product
                    id="1"
                    title="New things"
                    image={productImg}
                    price="12.2"
                    rating="5"
                />
                <Product
                    id="1"
                    title="New things"
                    image={productImg}
                    price="12.2"
                    rating="3"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1"
                    title="New things"
                    image={productImg}
                    price="12.2"
                    rating="2"
                />
                <Product
                    id="1"
                    title="New things"
                    image={productImg}
                    price="12.2"
                    rating="5"
                />
                <Product
                    id="1"
                    title="New things"
                    image={productImg}
                    price="12.2"
                    rating="4"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1"
                    title="New things"
                    image={productImg}
                    price="12.2"
                    rating="3"
                />
            </div>
        </div>
    )
};

export default Home