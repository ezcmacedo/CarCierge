import React from 'react';
import { UilFacebook } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'

function Footer() {
    return (
        <div className='bg-[#090B01] text-[#B68322] absolute inset-x-0 bottom-0 p-8'>
            <div id="footer_items" className='flex justify-between items-center'>
                <div id="devs" className='flex flex-col gap-2'>
                    <a href="" className='flex'><UilGithub />Enzo Macedo</a>
                    <a href="" className='flex'><UilGithub />Alexandre</a>
                    <a href="" className='flex'><UilGithub />alguém</a>
                </div>

                <div id="social_media" className='text-[1.2rem]'>
                    <span>Nos siga em nossas redes sociais</span>
                    <div id="social_medias_items" className='flex gap-8 justify-center mt-2'>
                        <a href="" className='text-blue-700'><UilFacebook /></a>
                        <a href=""><UilInstagram /></a>
                        <a href=""><UilTwitter /></a>
                    </div>
                </div>

                <div id="promotion" className='flex flex-col items-center text-[1rem]'>
                    <span>Quer receber promoções exclusivas?</span>
                    <input type="email" name="email" id="email_promotion" placeholder='Email...' className='mt-2 w-[200px] p-[3px] flex justify-center 
                    items-center rounded-[7px] appearance-none text-black'/>
                </div>
            </div>
        </div>
    )
};

export default Footer;