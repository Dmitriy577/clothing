import React, {useContext} from 'react';
import {CustomContext} from "../../utils/Context";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Checkout = () => {

    const {reset, register, handleSubmit} = useForm()
    const {cart,user} = useContext(CustomContext)
    const navigate = useNavigate()

    const addOrder = (data) => {
        axios.post(`https://c61db6ccb97445c0.mokky.dev/orders`, {
            ...data,
            clothes: cart,
            price: cart.reduce((acc,rec) => {
                return acc + rec.price * rec.count
            },0),
            userEmail: user.email
        }).then((res) => alert('Заказ оформлен'))

        axios.patch(`https://c61db6ccb97445c0.mokky.dev/users/${user.id}`, {
            orders: [
                ...user.orders,
                {
                    ...data,
                    ...data,
                    clothes: cart,
                    price: cart.reduce((acc,rec) => {
                        return acc + rec.price * rec.count
                    },0)
                }
            ]
        })
        reset()
        navigate('/')
    }

    return (
        <section className="checkout">
            <div className="container">
                <h2 className="cart__title">
                    Оформление заказа
                </h2>
                <p>
                    Главная — <span>Оформление заказа</span>
                </p>
                <form className="checkout__row"
                      onSubmit={handleSubmit(addOrder)}
                >
                    <div className="checkout__block">
                        <div className="checkout__form">
                            <h2 className="checkout__title">
                                Данные покупателя
                            </h2>
                            <input {...register('name')} type="text" placeholder="Имя"/>
                            <input {...register('email')} type="email" placeholder="E-mail"/>
                            <input {...register('tel')} type="tel" placeholder="Телефон"/>
                        </div>
                    </div>

                    <div className="checkout__block">
                        <h2 className="checkout__title">
                            Ваш заказ
                        </h2>
                        <ul className="checkout__list">
                            <li className="checkout__item">
                                <h3 className="checkout__item-title">
                                    Товар
                                </h3>
                                <h3 className="checkout__item-title">
                                    Всего
                                </h3>
                            </li>
                            <li className="checkout__item">
                                {
                                    cart.map((item) => (
                                        <>
                                            <p className="checkout__item-name">
                                                {item.title}
                                            </p>
                                            <p className="checkout__item-name">
                                                {item.price * item.count} $
                                            </p>
                                        </>
                                    ))
                                }
                            </li>
                            <li className="checkout__item count">
                                Итого: <span>
                                 {
                                     cart.reduce((acc,rec) => {
                                         return acc + rec.price * rec.count
                                     },0)
                                 } $
                            </span>
                            </li>
                        </ul>
                    </div>

                    <div className="checkout__block">
                        <div className="checkout__form">
                            <h2 className="checkout__title">
                                Адрес получателя
                            </h2>
                            <input {...register('country')} type="text" placeholder="Страна"/>
                            <input {...register('city')} type="text" placeholder="Город"/>
                            <input {...register('street')} type="text" placeholder="Улица"/>
                            <input {...register('home')} type="text" placeholder="Дом"/>
                            <input {...register('flat')} type="text" placeholder="Квартира"/>
                        </div>
                    </div>
                    <div className="checkout__block">
                        <div className="checkout__form">
                            <h2 className="checkout__title">
                                Способы оплаты
                            </h2>
                            <label className="checkout__label">
                                <input className="checkout__check" type="checkbox"/>
                                Оплата наличными
                            </label>
                            <button className="cart__count-btn" type="submit">
                                Разместить заказ
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;