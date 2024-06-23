import React from 'react'

import CarouselHome from '../Components/CarouselHome/CarouselHome'
import CarouselMenu from '../Components/CarouselHome/CarouselMenu'
import ServicesBanner from '../Components/ServicesBanner'
import CarsBanner from '../Components/CarsBanner'

function HomePage() {

  return (
    <>
        <CarouselMenu />
        <CarouselHome />
        <ServicesBanner />
        <CarsBanner />
    </>
  )
}

export default HomePage