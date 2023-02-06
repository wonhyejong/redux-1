import React from 'react';
import './CartItem.css';
const CartItem = ({item}) => {
    return (
        <div className="cart-item">
            <img 
            src={item.product_img}
            alt="cart-item" 
            className="cart-item-img"
            />
            <span className="cart-item-name">{item.product_name}</span>
            <span className="cart-item-price">{item.price}</span>
            <i className="fas fa-trash-alt"></i>
        </div>
    );
};

export default CartItem;