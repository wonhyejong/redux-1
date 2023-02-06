import React from 'react';
import "./ProductItem.css";
const ProductItem = ({item}) => {
    return (
        <div className="product-item">
            <img 
            src={item.product_img}
            alt="product"
            className='item-image' />
            <div className="item-name">{item.product_name}</div>
            <div className="item-price">{item.price}</div>
            <button className='add-cart-btn'>
                <i className="fas fa-plus"></i>
                장바구니에 담기
            </button>

        </div>
    );
};

export default ProductItem;