import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
import '../App.css';

SwiperCore.use([Pagination]);

function Intro() {
  return (
	<div className='flex-page'>
		<div style={{width: '100%', backgroundColor: '#F9F6ED'}}>
			<h1 className='center-div'>

					Mus. Aliquam quam. Nam felis velit, semper nec, aliquam nec, iaculis vel, mi. 
			
			</h1>
		</div>	
		<Swiper style={{ zIndex:'0'}} pagination={{clickable:'true'}}>
		
			<SwiperSlide> Slide 1 </SwiperSlide>
			<SwiperSlide> Slide 2 </SwiperSlide>
			<SwiperSlide> Slide 3 </SwiperSlide>
			<SwiperSlide> Slide 4 </SwiperSlide>
			<SwiperSlide> Slide 5 </SwiperSlide>

		</Swiper>

	</div>

  );
}

export default Intro;
