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

		<div className='flex-page'>

				<div className='center-div'> 
				<img src={csa} alt='CSA' />
				</div>	

				<Swiper style={{ zIndex:'0', height: '100%'}} pagination={{clickable:'true'}}>

					<SwiperSlide> 
					
						<p style={{overflow: 'auto', width: '80%'}}> 

							
							Dui velit, ultrices vel, ullamcorper mattis, hendrerit in, erat. Aenean vel
									quam at eros mattis commodo. Aenean feugiat iaculis justo.
									Maecenas accumsan justo ut nibh. Donec ac lectus vitae odio
									lobortis tristique. Donec vestibulum mattis lectus. Donec et
									lorem.

							Cras sit amet mauris. Curabitur a quam. Aliquam neque. Nam nunc nunc, lacinia
									sed, varius quis, iaculis eget, ante. Nulla dictum justo eu
									lacus. Phasellus sit amet quam. Nullam sodales. Cras non magna
									eu est consectetuer faucibus. Donec tempor lobortis turpis. Sed
									tellus velit, ullamcorper ac, fringilla vitae, sodales nec,
									purus. Morbi aliquet risus in mi.

							Curabitur cursus volutpat neque. Proin posuere mauris ut.


						</p>

					</SwiperSlide>
					<SwiperSlide> 
					
			 			<img style={{width: '100%'}}src={fullPage} alt='full page'/> 
					</SwiperSlide>

				</Swiper>
			


		</div>
	);
}

export default Text;

