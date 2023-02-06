import React from 'react';
import "./Nav.css";

const Nav = () => {    
    return (   
        <nav className="nav">
            <span>SHOP</span>
            <span>
                <i className="fas fa-shopping-cart">
                    <div className='cart-amount'>1</div>
                </i>
            </span>
            <span className="user">
                로그인
            </span>
        </nav>
    );
};

export default Nav;