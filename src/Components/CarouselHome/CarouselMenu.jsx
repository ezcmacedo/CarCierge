import React from 'react'
import { Link } from 'react-router-dom'

const CarouselMenu = () => {
  return (
    <div className='py-0'>
      <ul className='h-[50px] w-full flex flex-row justify-around items-center bg-[#B68322] font-inter font-extrabold text-white'>

        <Link to={"/NotFoundPage"}>
          <li>Nossos Carros</li>
        </Link>

        <Link to={"/NotFoundPage"}>
          <li>Serviços</li>
        </Link>

        <Link to={"/NotFoundPage"}>
          <li>Sobre Nós</li>
        </Link>
      </ul>
    </div>
  )
}

export default CarouselMenu