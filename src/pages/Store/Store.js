import React, {useContext} from 'react';
import Card from "../../components/Card/Card";
import {CustomContext} from "../../utils/Context";
import {Pagination} from "antd";

import {ImMan,ImWoman,ImManWoman} from "react-icons/im"

const Store = () => {

    const {products,  categories, setCategories, page, setPage, changeGender, setChangeGender} = useContext(CustomContext)

    const showCount = products
        .filter((item) => changeGender === 'all' ? item : item.gender === changeGender)
        .filter((el) => categories === 'all' ? el : el.category === categories)
        .filter((item, idx) => idx + 1 <= page * 9 && idx >= page * 9 - 9).length

    const showCountsLength =  products
        .filter((item) => changeGender === 'all' ? item : item.gender === changeGender)
        .filter((el) => categories === 'all' ? el : el.category === categories).length





    return (
        <section className="store">
            <div className="container">
                <h2 className="store__title">
                    Магазин
                </h2>
                <p>Главная - Магазин</p>
                <ul className="store__list">
                    <li
                        className={`store__item ${categories === 'all' ? 'active' : ''}`}
                        onClick={() => setCategories('all')}>
                        Все
                    </li>
                    <li
                        className={`store__item ${categories === 'sweatshirts' ? 'active' : ''}`}
                        onClick={() => setCategories('sweatshirts')}
                    >
                        Свитшоты
                    </li>
                    <li
                        className={`store__item ${categories === 'pants' ? 'active' : ''}`}
                        onClick={() => setCategories('pants')}
                    >
                        Штаны
                    </li>
                    <li
                        className={`store__item ${categories === 't-short' ? 'active' : ''}`}
                        onClick={() => setCategories('t-short')}
                    >
                        Футболки
                    </li>
                    <li
                        className={`store__item ${categories === 'shoes' ? 'active' : ''}`}
                        onClick={() => setCategories('shoes')}
                    >
                        Обувь
                    </li>
                </ul>
                <div className="store__genders">
                    {
                            changeGender === 'men' ? <ImMan size={30}/> : 
							changeGender === 'woman' ?<ImWoman size={30}/> :<ImManWoman size={30}/>

                    }
                    <select onChange={(e) => setChangeGender(e.target.value)} className="store__select">
                        <option value="all">All</option>
                        <option value="men">Men</option>
                        <option value="woman">Woman</option>
                    </select>

                </div>


                <p className="store__show">Показано: {showCount} из {showCountsLength} товаров</p>
                <div className="store__row">
                    {
                        products
                            .filter((item) => changeGender === 'all' ? item : item.gender === changeGender)
                            .filter((el) => categories === 'all' ? el : el.category === categories)
                            .filter((item, idx) => idx + 1 <= page * 9 && idx >= page * 9 - 9)
                            .map((item,idx) => (
                            <Card key={idx && item.id} item={item}/>
                        ))
                    }
                </div>
                <p className="store__show">Показано: {showCount} из {showCountsLength} товаров</p>
                <div className="store__pages">
                    {
                        showCountsLength > 12 ?
                            <Pagination
                                simple
								defaultCurrent={2}
                                onChange={setPage}
                                
                                total={products.filter((item) => changeGender === 'all' ? item : item.gender === changeGender).filter((el) => categories === 'all' ? el : el.category === categories).length}
                                pageSize={9}
                            /> : ''
                    }

                </div>
            </div>

        </section>
    );
};

export default Store;