import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
    const { id } = useParams()
    const [bookDetail,setBookDetail] = useState({}) 
    const [listName,setListName] = useState('')
    const searchedBooks = useSelector((state) => state.search.data)
    const bestsellerBooks = useSelector((state)=>state.book.data)

    const getBookDetail = () =>{
        searchedBooks.map((book) => {
            if(book.id === id){
                setListName('search')
                setBookDetail(book)
            }
        })
        bestsellerBooks.map((book) =>{
            if(book.primary_isbn10 === id){
                setListName('bestseller')
                setBookDetail(book)
            }
        })
        
    }
    
    useEffect(() =>{
        getBookDetail()
    },[id])
   
  return (
    <div className='bookdetail-container'>
    {listName === 'search' ? 
    <section className='bookdetail-section'>
        <div className='bookdetail-img'>
            <img src={bookDetail.volumeInfo.imageLinks.thumbnail} alt={bookDetail.volumeInfo.title} />
        </div>
         <div className='bookdetail-info'>
            <h3>{bookDetail.volumeInfo.title}</h3>
            <p ><span>Author : </span> {bookDetail.volumeInfo.authors}</p>
            <p ><span>Publisher : </span> {bookDetail.volumeInfo.publisher}</p>
            <p ><span>Description : </span>{bookDetail.volumeInfo.description}</p>
            <p><span>Published Date : </span>{bookDetail.volumeInfo.publishedDate}</p>
            <p><span>pages: </span>{bookDetail.volumeInfo.pageCount}</p>
         </div>
    </section>
    :
    <section className='bookdetail-section'>
        <div className='bookdetail-img'>
            <img src={bookDetail.book_image} alt={bookDetail.title} />
        </div>
         <div className='bookdetail-info'>
            <h3>{bookDetail.title}</h3>
            <p >{bookDetail.author}</p>
            <p >Publisher: {bookDetail.publisher}</p>
            <p >{bookDetail.description}</p>
            <div>
                <a href={bookDetail.amazon_product_url} target="_blank"><i className="fa-brands fa-amazon"></i></a>
            </div>
         </div>
    </section>
    }
    </div>
  )
}

export default BookDetails