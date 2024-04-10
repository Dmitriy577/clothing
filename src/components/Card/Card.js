import React from 'react';
import {Link} from 'react-router-dom'

const Card = ({item}) => {
    return (
        <div className="store__card">
            <Link className="store__card-link" to={`/product/${item.id}`}>
                <img src={item.img[0]} alt="" className="store__card-img"/>
            </Link>
            <h3 className="store__card-title">
                {item.title}
            </h3>
            <p className="store__card-price">
                {item.price} $
            </p>
        </div>
    );
};

export default Card;