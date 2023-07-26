import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart,removeFromCart,quantutyDecrement } from '../slices/cartSlice'
import "./style.css"

const Cart = () => {
  const cart = useSelector((state) => state.cart) 
  const [total,setTotal] = useState(0)
  const dispatch = useDispatch()

  
  const handleClick = (id) =>{
    dispatch(removeFromCart(id))
  }
  const incQuantuty = (item) =>{
    dispatch(addToCart(item))
  }

  const decQuantity = (item) =>{
    dispatch(quantutyDecrement(item))
  }
  const calculateTotal = () =>{
    let price = 0;
    cart.map((item) =>{
      price = item.quantity * 500 + price
    })
    setTotal(price)
  }

  useEffect(() =>{
    calculateTotal()
  },[calculateTotal])
  return (
    <section className='cart-container'>
      <h1 className='cart-heading'>Cart</h1>
      {cart.length > 0 ? <div className='cart-items'>
       {cart.map((book) =>{
          return <section className='cart-item' key={book.id}>
            <img src={book.img} alt={book.name}/>
            <div className='book-info'>
              <h3>{book.name}</h3>
              <p>{book.author}</p>
              <p>₹ 500</p>
              <div className='quantity-control'>
                <button onClick={() => decQuantity(book)}>-</button>
                <span className='quantity'>{book.quantity}</span>
                <button onClick={() => incQuantuty(book)}>+</button>
              </div>
              <p>Total: ₹{500 * book.quantity}</p>
              <button onClick={() => handleClick(book.id)}>Remove Item</button>
            </div>
          </section>
        })}
        <h2>Total Amount : {total}</h2>
      </div> : 
      <h2>Your Cart is Empty !</h2>
      }
      
    </section>
    
  )
}

export default Cart