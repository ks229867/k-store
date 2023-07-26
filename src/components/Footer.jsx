import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-section'>
        <div className='footer-info'>
          <h3>Address</h3>
          <p>D-123 Block No. 10 Gole Market New Delhi 110001 Delhi</p>
        </div>
        <div className='footer-info'>
          <h3>Contact Us</h3>
          <p>+123456789</p>
          <p>ks229867@mail.com</p>
        </div>
        <div className='footer-info'>
          <h3>Socials</h3>
          <div>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Footer