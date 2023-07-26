import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import "./style.css"

const TopBestSellers = () => {
  const [topFive,setTopFive] = useState([])
  const [current,setCurrent] = useState(0)
  const length = 5;
  const prevSlide = () =>{
    setCurrent(current === 0 ? length-1 : current - 1)
  }
  const nextSlide = () =>{
    setCurrent(current === length -1 ? 0 :current + 1)
  }
  const fetchList = async () =>{
    try {
      await axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${process.env.REACT_APP_NEW_YORK_TIMES_API_KEY}`)
      .then((data) => {
      setTopFive(data.data.results.lists[0].books)
    })
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(() =>{
    fetchList()
},[])
  return (
    <div className='Topbestseller-container'>
      <h1>The New York Times bestseller Top 5</h1>
      <h2>Combined Print and E-Book Fiction</h2>
      <section className='topfive-bestsellers'>
        <AiOutlineLeft className='left arrow' onClick={prevSlide}/>
        <section className='topfive-list'>
          {topFive.map((book,index)=>{
            return (
              <div key={index} className={index ===current ? 'slide active':'slide'}>
                {index === current && (
                  <article className='topfive-card'>
                      <div className='top-five-img'>
                        <img src={book.book_image} alt={book.title} />
                      </div>
                      <div className='top-five-info'>
                        <h3>{book.title}</h3>
                        <p className='book-author'>{book.author}</p>
                        <p >Publisher: {book.publisher}</p>
                        <p className='book-description'>{book.description}</p>
                        <div>
                          <a href={book.amazon_product_url}><i className="fa-brands fa-amazon"></i></a>
                        </div>
                      </div>
                    </article>
                )}
              </div>
            )
          })}
        </section>
        <AiOutlineRight className='right arrow' onClick={nextSlide}/>
      </section>
    </div>
  )
}

export default TopBestSellers