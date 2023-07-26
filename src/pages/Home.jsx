import React from 'react'
import TopBestSellers from '../components/TopBestSellers'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Facilities from '../components/Facilities'

const Home = () => {
  return (
    <div>
        <Main />
        <TopBestSellers />
        <Facilities />
        <Footer />
    </div>
  )
}

export default Home