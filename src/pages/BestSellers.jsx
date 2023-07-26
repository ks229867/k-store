import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchBestSellerBook } from '../slices/fetchBookSlice'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
import Loading from '../components/Loading'
import { addToCart } from '../slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'

const BestSellers = () => {
    const [genreList,setGenreList] = useState([])
    const [selectedGenre,setSelectedGenre] = useState('Family')
    const [cartAlert,setCartAlert] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const books = useSelector((state) => state.book.data)
    const loading = useSelector((state) => state.book.isLoading)
    const error = useSelector((state) => state.book.isError)
    const SlicedGenreList = [].concat([...genreList.slice(1,5)],[...genreList.slice(-28)])   

    const handleChange = (e) =>{
        setSelectedGenre(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(fetchBestSellerBook(selectedGenre))
    }

    const bestSellerBooks = books.map((book)=> {
        return {...book,id:book.primary_isbn10}
    })

    const handleCart = (book) =>{
        
        const cartInfo = {name:book.title,author:book.author,img:book.book_image,id:book.id}
        dispatch(addToCart(cartInfo))
        setCartAlert(true)
        setTimeout(() =>{
            setCartAlert(false)
        },6000)
    }
    const fetchList = async () =>{
        try {
          await axios.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.REACT_APP_NEW_YORK_TIMES_API_KEY}`)
          .then((data) => setGenreList(data.data.results))
        } catch (error) {
          console.log(error);
        }
      }

      const handleClick = (book) =>{
        navigate(`/book/${book.primary_isbn10}`)
      }
      useEffect(()=>{
        fetchList()
        dispatch(fetchBestSellerBook(selectedGenre))
      },[])

  return (
    <div className='bestsellers-page'>
     {cartAlert && <Alert />}
    <h1>New York Times BestSellers</h1>
    <div className='select-genre-container'>
        <span>Select Genre : </span>
        <form onSubmit={handleSubmit}>
            <select value={selectedGenre} onChange={handleChange}>
                
                {SlicedGenreList.map((genre,index) => {
                    return <option value={genre.list_name} key={index}>{genre.list_name}</option>
                })} 
            </select>
            <button type='submit'>Get List</button>
        </form>     
    </div>
    {loading ? <Loading /> 
        : error ? <h1>Something went wrong !</h1>
        : <section className='bestseller-books'>
            <h2>{selectedGenre}</h2> 
                <section className='bestseller-books-section'>
                    {bestSellerBooks.map((book,index) =>{
                    return <article className='bestseller-book-card' key={index}>
                    <div className='book-rank'>
                        <i class="fa-solid fa-award">{book.rank}</i>
                    </div>
                        <div className='book-img'>
                            <img src={book.book_image} alt={book.title} />
                        </div>
                        <div className='book-info'>
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <div>
                                <span>₹500</span>
                                <button onClick={() => handleCart(book)}>Add to Cart</button>
                            </div>
                            <span onClick={() => handleClick(book)}>learn more ...</span>
                        </div>
                    </article>
                })}
                </section>
        </section>}
        
    </div>
  )
}

export default BestSellers