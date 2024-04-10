import React from 'react';
import img from "../../../assets/home/dmitriy-7DD6tfTKqS4-unsplash 1.png";
import { NavLink } from "react-router-dom";

const NewPost = () => {
    return (

        <section className="newpost">
            <div className="container">
                <div className="newpost__row">
                    <div className="newpost__left">
                        <h2 className="newpost__left-title">Новые поступления
                            в этом сезоне</h2>
                        <p className="newpost__left-desc">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                        <div lassName="newpost__left-btnMenu">
							<NavLink to={"/store"} className="newpost__left-btn">
            					За покупками 
            				</NavLink>
                        </div>
                    </div>

                    <div className="newpost__right">
                        <img src={img} alt="" style={{width: "300px"}}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewPost;