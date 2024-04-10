import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CustomContext } from "../../utils/Context";

import logo from "../../assets/logo.png";
import { MdPhoneInTalk } from "react-icons/md";
import { SlLogin } from "react-icons/sl";
import { BsHandbag } from "react-icons/bs";

const Header = () => {
  const { user, logoutUser, cart } = useContext(CustomContext);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link to={"/"}>
            <h1 className="header__title">
              <img src={logo} alt="" style={{ height: "40px" }}/>
            </h1>
          </Link>
          <div className="header__menu">
            <NavLink to={"/"} className="header__link">
              Главная
            </NavLink>
            <NavLink to={"/store"} className="header__link">
              Магазин
            </NavLink>
            <NavLink to={"/brand"} className="header__link">
              О бренде
            </NavLink>
            <NavLink to={"/contacts"} className="header__link">
              Контакты
            </NavLink>
          </div>
          <div className="header__right">
            <a href="tel:+38(050)2377663" className="header__phone">
              <MdPhoneInTalk />
              +38 (050) 237-76-63
            </a>

            {user.login.length ? (
              <Link
                to={"/"}
                className="header__user"
                onClick={() => logoutUser()}
              >
                Выйти
              </Link>
            ) : (
              <Link to={"/login"} className="header__user">
                <SlLogin />
              </Link>
            )}

            <Link to={"/cart"} className="header__user">
              <div className="header__user-cart">
                <BsHandbag />
                {cart.length ? <sup>{cart.length}</sup> : ""}
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
