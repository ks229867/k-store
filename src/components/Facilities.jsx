import React from 'react'
import "./style.css"

const Facilities = () => {
  return (
    <section className='facilities-container'>
        <section className='facilities-section'>
            <div className='facility-card'>
                <i class="fa-solid fa-truck"></i>
                <div>
                    <h3>Free Shipping</h3>
                    <p>For all orders above ₹2000</p>
                </div>
            </div>
            <div className='facility-card'>
                <i class="fa-solid fa-clock"></i>
                <h3>Delivery on Time</h3>
            </div>
            <div className='facility-card'>
                <i class="fa-brands fa-paypal"></i>
                <h3>Secure Payment</h3>
            </div>
        </section>
    </section>
  )
}

export default Facilities