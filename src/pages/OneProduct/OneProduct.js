import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Slider from "../Home/Slider/Slider";
import {CustomContext} from "../../utils/Context";

const OneProduct = () => {
    const [product, setProduct] = useState({})
    const [currentSize,setCurrentSize] = useState()
    const [currentColor,setCurrentColor] = useState("black")
    const {addElCart} = useContext(CustomContext)
    const params = useParams()

    const getOneProduct = () => {
        axios(`https://c61db6ccb97445c0.mokky.dev/items/${params.id}`)
            .then(({data}) => setProduct(data))
    }
    useEffect(() => {
        getOneProduct()
    }, [setProduct])


    console.log()
    return (
        <>
        <section className="oneproduct">
            <div className="container">
			<p className="oneproduct__desc">
                    Главная — Свитшоты — <span>Свитшот Sweet Shot</span>
                </p>
                <h2 className="oneproduct__title">
                    {product.title}
                </h2>
                <div className="oneproduct__row">
                    <div className="oneproduct__left" style={{background:`url(${`.${product?.img?.filter((item,idx) => idx === 0)}`}) center/cover`}}>

                    </div>
                    <div className="oneproduct__right">
                        <p className="oneproduct__price">
                            ${product.price} <span>${product.price * 1.2}</span>
                        </p>

                        <div className='oneproduct__sizes'>
                            <p>
                                Выберите размер
                            </p>
                            <div className="oneproduct__sizes-row">
                                {
                                    product?.sizes?.map(item => (
                                        <div
                                             onClick={() => setCurrentSize(item.size)}
                                             className={`oneproduct__size ${currentSize === item.size ? "active" : ""}`}
                                        >
                                            {item.size}
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <div className='oneproduct__sizes'>
                            <p>
                                Выберите цвет
                            </p>
                            <div className="oneproduct__sizes-row">
                                {
                                    product?.colors?.map(item => (
                                        <div  style={{background: item.color}}
                                             onClick={() => setCurrentColor(item.color)}
                                              className={`oneproduct__color ${currentColor === item.color ? "color-active" : ""}`}
                                        >

                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <button disabled={!currentSize} onClick={() => addElCart(product)} className="oneproduct__btn">
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default OneProduct;