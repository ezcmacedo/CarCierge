import React from 'react'
import CarouselHome from '../Components/CarouselHome/CarouselHome'
import CarouselMenu from '../Components/CarouselHome/CarouselMenu'
import Services from '../Components/Services'

function HomePage() {
  return (
    <>
        <CarouselMenu />
        <CarouselHome />
        <Services/>
    </>
  )
}

export default HomePage