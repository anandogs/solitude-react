import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
import '../App.css';
import csa from './images/csa.png'
import fullPage from './images/fullpage.jpg'

SwiperCore.use([Pagination]);

function Text() {

	return (

		<div className='flex-page' id='csa'>

				<div className='center-div'> 
				<img src={csa} alt='CSA' />
				</div>	

			


		</div>
	);
}

export default Text;

