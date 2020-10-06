import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
import ourStory from './images/our_story.svg';
import imageBlank from './images/image-blank.png';
import '../App.css';

SwiperCore.use([Pagination]);

function TextImage() {

	return (

		<div className='flex-page' id='our-story'>

			<div className='center-div'>
				<img src={ourStory} alt ='Our Story' style={{width: '50%'}} />
			</div>	

			<span className='center-div' style={{paddingBottom: '1em'}}> In, urna. Nam eget eros a enim pulvinar rhoncus.
				Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Nulla facilisis massa ut massa. Sed nisi purus, malesuada eu.
			</span>

			<Swiper style={{ zIndex:'0'}} pagination={{clickable:'true'}}>

				<SwiperSlide> 
				
					<img src={imageBlank} alt='Blank' style={{width: '100%', height: '90%'}}/>

				</SwiperSlide>
		  
				<SwiperSlide> 
				
					<img src={imageBlank} alt='Blank' style={{width: '100%', height: '90%'}}/>

				</SwiperSlide>

				<SwiperSlide> 
				
					<img src={imageBlank} alt='Blank' style={{width: '100%', height: '90%'}}/>

				</SwiperSlide>
		  
				<SwiperSlide> 
				
					<img src={imageBlank} alt='Blank' style={{width: '100%', height: '90%'}}/>

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