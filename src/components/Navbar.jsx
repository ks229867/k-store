import React from 'react'
import "./style.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const productCount = useSelector((state) => state.cart)
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/cart')  
  }
  return (
    <nav>
        <h1 className='logo'>K-Store</h1>
        <div className='nav-menu'>
            <NavLink to={'/'}><span>Home</span></NavLink>
            <NavLink to={'/bestsellers'}><span>Bestsellers</span></NavLink>
            
        </div>
        <div className="cart-icon" onClick={handleClick}>
        <i className="fa-solid fa-cart-shopping "></i>
            <div className='notification'>
            <div className='item-count'>{productCount.length}</div>
            </div>
      </div>
    </nav>
  )
}

export default Navbar