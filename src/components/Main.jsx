import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const Main = () => {
    const [bookName, setBookName] = useState('')
   const navigate = useNavigate()
    const handleSubmit = () =>{
        navigate(`/search/${bookName}`)
    }
  return (
    <div className='main-container'>
        <div className='search-container'>
            <h1>Whats' up Readers</h1>
            <h2>Get your Favourite Book here</h2>
            <div className='search-form-container'>
                <form className='search-form-control' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Books...' value={bookName} onChange={(e)=> setBookName(e.target.value)}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
           
        </div>
            <div className='main-img'>
            <img src={require('../images/claudia-wolff-MiJTU6lqksg-unsplash.jpg')} alt='book-img' />
        </div>
    </div>
  )
}

export default Main