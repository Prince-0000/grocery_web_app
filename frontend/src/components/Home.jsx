import React from 'react'
import HeroBanner from './HeroBanner'
import CategoryBanner from './CategoryBanner'
import CardBanner from './CardBanner'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <CategoryBanner />
      <HeroBanner />
      <CardBanner />
      <CardBanner />
      <CardBanner />
      <CardBanner />
      <Footer />

    </div>
  )
}

export default Home
