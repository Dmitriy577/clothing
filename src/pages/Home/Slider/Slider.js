
import React, {useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

import { FreeMode, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/navigation';


import {CustomContext} from "../../../utils/Context";



const Slider = () => {

    const {products} = useContext(CustomContext)
	const showCount = (item) => {
		products(item)

	}


    return (
        <section className="collection">
            <div className="container">
                <h2 className="collection__title">Новая коллекция</h2>

                    <>
                    <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    navigation
                    modules={[FreeMode,Navigation]}
                    className="mySwiper"
                    >
                        {
                            products.map(item => (
                                <SwiperSlide key={item.id} onClick={() => showCount(item)}>
                                    <div className="collection__card">
                                        <div className="collection__images" style={{background:`url(${`.${item?.img?.filter((item,idx) => idx === 0)}`}) center/cover`}}>
	
                                        </div>
                                        <h3 className='collection__card-title'>{item.title}</h3>
                                        <p className='collection__card-price'>${item.price}</p>
                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    </>
					<NavLink to={"/store"} className="collection__btn">
            					За покупками 
            				</NavLink>
            </div>
        </section>
    );
};

export default Slider;