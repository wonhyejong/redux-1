import React from 'react';
import "./Nav.css";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
const Nav = () => {    
    const cart=useSelector(state=>state.cart)
    return (   
        <nav className="nav">
            <h1><Link to='/'>SHOP</Link></h1>
            <span>
                <Link to='/cart'>
                <i className="fas fa-shopping-cart">
                    <div className='cart-amount'>{cart.length}</div>
                </i>
                </Link>
            </span>
            <span className="user">
                로그인
            </span>
        </nav>
    );
};

export default Nav;