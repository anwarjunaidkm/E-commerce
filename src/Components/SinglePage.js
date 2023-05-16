import React from 'react'
import Instagram from './Instagram'
import Header from "./Header"
import Banner from './Banner'
import BannerContent from './BannerContent'
import PopularCollection from './PopularCollection'
import Quotes from './Quotes'
import Footer from './Footer'


function SinglePage() {
  return (
    <div>
      <Header/>
      <Banner />
      <BannerContent />
      <PopularCollection />
      <Quotes />
      <Instagram/>
      <Footer/>
      
    </div>
  )
}

export default SinglePage
