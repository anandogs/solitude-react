import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
import ourStory from './images/our_story.svg';
import papaya from './images/papaya.jpg';
import spinach from './images/spinach.jpg';
import turkey from './images/turkey.jpg';
import banana from './images/banana.jpg';
import tapioca from './images/tapioca.jpg';
import '../App.css';

SwiperCore.use([Pagination]);

function TextImage() {

	return (

		<div className='flex-page'>

			<div className='center-div'>
				<img src={ourStory} alt ='Our Story' style={{width: '50%'}} />
			</div>	

			<span className='center-div'> In, urna. Nam eget eros a enim pulvinar rhoncus.
				Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Nulla facilisis massa ut massa. Sed nisi purus, malesuada eu.
			</span>

			<Swiper style={{ zIndex:'0'}} pagination={{clickable:'true'}}>

				<SwiperSlide> 
				
					<img src={papaya} alt='Papaya' style={{height: '100%'}}/>

				</SwiperSlide>
		  
				<SwiperSlide> 
				
					<img src={spinach} alt='Spinach' style={{height: '100%'}}/>

				</SwiperSlide>

				<SwiperSlide> 
				
					<img src={turkey} alt='Turkey' style={{height: '100%'}}/>

				</SwiperSlide>
		  
				<SwiperSlide> 
				
					<img src={banana} alt='Banana' style={{height: '100%'}}/>

				</SwiperSlide>
		
				<SwiperSlide> 
				
					<img src={tapioca} alt='Tapioca' style={{height: '100%'}}/>

				</SwiperSlide>

			</Swiper>
			
			<div className='caption-box center-div'>

				<h4>Photo heading</h4>	

				<span className='caption-text'> Iaculis sollicitudin, leo ligula cursus
					sem, eu congue metus ligula sed justo. Suspendisse.
				</span>

			</div>

		</div>
	);
}

export default TextImage;
