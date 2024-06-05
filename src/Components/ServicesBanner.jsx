import React from 'react'

const ServicesBanner = () => {
    return (
        <div className='h-[340px] w-[80.2%] my-10 mx-auto flex flex-col items-center justify-center bg-[#b68222b6] font-inter text-white font-extrabold '>
            <h1 className='text-[2rem]'>Conheça nossos serviços</h1>
            <ul className='grid grid-cols-5 gap-20 mx-auto py-10'>
                <ui>
                    <div className='h-[150px] w-[125px] flex flex-col items-center justify-center'>
                        <img className="h-[75px] w-[75px]" src="/img/icons/rastreamento-24h.png" alt="" />
                        <p className='pt-4'>RASTREAMENTO 24H</p>
                    </div>
                </ui>
                <ui>
                    <div className='h-[150px] w-[125px] flex flex-col items-center justify-center'>
                        <img className="h-[75px] w-[75px]" src="/img/icons/carros-luxuosos.png" alt="" />
                        <p className='pt-4'>CARROS DE LUXO</p>
                    </div>
                </ui>
                <ui>
                    <div className='h-[150px] w-[125px] flex flex-col items-center justify-center'>
                        <img className="h-[75px] w-[75px]" src="/img/icons/segurança-personalizada.png" alt="" />
                        <p className='pt-4'>SEGURANÇA PERSONALIZADA</p>
                    </div>
                </ui>
                <ui>
                    <div className='h-[150px] w-[125px] flex flex-col items-center justify-center'>
                        <img className="h-[75px] w-[75px]" src="/img/icons/prontos-para-eventos.png" alt="" />
                        <p className='pt-4'>EVENTOS</p>
                    </div>
                </ui>
                <ui>
                    <div className='h-[150px] w-[125px] flex flex-col items-center justify-center'>
                        <img className="h-[75px] w-[75px]" src="/img/icons/assistencia-tecnica.png" alt="" />
                        <p className='pt-4'>ASSISTENCIA ESPECIALIZADA</p>
                    </div>
                </ui>
            </ul>
        </div>
    )
}

export default ServicesBanner