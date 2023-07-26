import React, { useEffect, useState } from 'react'
import { fetchSearchedBook } from '../slices/searchBookSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { addToCart } from '../slices/cartSlice'
import Alert from '../components/Alert'

const SearchedBooks = () => {
    const { name } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [cartAlert,setCartAlert] = useState(false)
    const books = useSelector((state) => state.search.data)
    const loading = useSelector((state) => state.search.isLoading)

    const fetchBook = () =>{
        dispatch(fetchSearchedBook(name))
    }

    const handleCart = (book) =>{
        
        let imageUrl = ''
            if(!book.volumeInfo.imageLinks){
                imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            }else{
                imageUrl = book.volumeInfo.imageLinks.thumbnail
            }
        const cartInfo = {name:book.volumeInfo.title,author:book.volumeInfo.authors,img:imageUrl,id:book.id}
        dispatch(addToCart(cartInfo))
        setCartAlert(true)
        setTimeout(() =>{
            setCartAlert(false)
        },6000)
    }

    const handleClick = (id) =>{
            navigate(`/book/${id}`)
    }
    useEffect(()=>{
        fetchBook()
    },[])

    if(loading){
       return <Loading />
    }
  return (
    <div className='searched-books-container'>
    {cartAlert && <Alert />}
    <h1>Search Results :<span>{name}</span> </h1>
    <section className='searched-books'>
        {books.map((book) =>{
            let imageUrl = ''
            if(!book.volumeInfo.imageLinks){
                imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            }else{
                imageUrl = book.volumeInfo.imageLinks.thumbnail
            }
            return <article className='searched-book-card' key={book.id}>
                <div className='searched-book-img'>
                    <img src={imageUrl} alt={book.volumeInfo.title} />
                </div>
                <div className='searched-book-info'>
                    <h3>{book.volumeInfo.title}</h3>
                    {/* {book.volumeInfo.authors.map((author) => <p>{author}</p>)} */}
                    <p>{book.volumeInfo.authors}</p>
                    <div>
                        <span>₹500</span>
                        <button onClick={() => handleCart(book)}>Add to Cart</button>
                    </div>
                    <span onClick={() => handleClick(book.id)}>learn more ...</span>
                </div>
            </article>
        })}
    </section>
    
    </div>
  )
}

export default SearchedBooks