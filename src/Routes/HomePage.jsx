import React from 'react'
import CarouselHome from '../Components/CarouselHome/CarouselHome'
import CarouselMenu from '../Components/CarouselHome/CarouselMenu'
import ServicesBanner from '../Components/ServicesBanner'

function HomePage() {
  return (
    <>
        <CarouselMenu />
        <CarouselHome />
        <ServicesBanner />
    </>
  )
}

export default HomePage