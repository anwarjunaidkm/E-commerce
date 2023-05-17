import React from 'react'
import Instagram from './Instagram'
import Header from "./Header"
import Banner from './Banner'
import BannerContent from './BannerContent'
import PopularCollection from './PopularCollection'
import Quotes from './Quotes'
import Footer from './Footer'
import FeaturedCollection from './FeaturedCollection'


function SinglePage() {
  return (
    <div>
      <Header/>
      <Banner />
      <BannerContent />
      <FeaturedCollection />
      <PopularCollection />
      <Quotes />
      <Instagram/>
      <Footer/>
      
    </div>
  )
}

export default SinglePage
