import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {CustomContext} from "../../utils/Context";

const Register = () => {

    const {registerUser} = useContext(CustomContext)

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
            <form className="register__form" onSubmit={handleSubmit(registerUser)}>
                <h2 className="register__title">Регистрация</h2>
                <input {...register('email', {
                    required: "Это поле обязательное"
                })} type="email" placeholder="Email"/>
                <span>{errors?.email?.message}</span>
                <input {...register('login')} type="text" placeholder="Login"/>
                <input {...register('tel')} type="tel" placeholder="Phone number"/>
                <input {...register('password')} type="password" placeholder="Password"/>
                <input type="password" placeholder="Password Confirm"/>
                <button type={"submit"}>Зарегистрироваться</button>
                <div className="register__question">
                    Уже есть аккаунт?
                    <Link to={'/login'} className="register__link">
                        Войти
                    </Link>
                    <Link to={'/'} className="register__link">
                        Вернуться на главную страницу
                    </Link>
                </div>

            </form>
        </section>
    );
};

export default Register;