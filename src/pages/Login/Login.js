import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {CustomContext} from "../../utils/Context";

const Login = () => {

    const {loginUser} = useContext(CustomContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm()

    return (
        <section className="register">
            <form className="register__form" onSubmit={handleSubmit(loginUser)}>
                <h2 className="register__title">Вход</h2>
                <input{...register('email', {
                    required: "Это поле обязательное"
                })} type="email" placeholder="Email"/>
                <span>{errors?.email?.message}</span>
                <input {...register('password')} type="password" placeholder="Password"/>
                <button type={"submit"}>Войти</button>
                <div className="register__question">
                    Нет аккаунта?
                    <Link to={'/register'} className="register__link">
                        Регистрация
                    </Link>
                    <Link to={'/'} className="register__link">
                        Вернуться на главную страницу
                    </Link>
                </div>

            </form>
        </section>
    );
};

export default Login;