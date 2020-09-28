import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
import '../App.css';
import './TextExpand.css';
import projects from './images/projects.png'

SwiperCore.use([Pagination]);

function TextExpand() {

	const [expand, toggleExpand] = useState(true);
	
	const hiddenText= {
		display: expand? 'none' : 'block'
	};
	const [expand1, toggleExpand1] = useState(true);
	
	const hiddenText1= {
		display: expand1? 'none' : 'block'
	};

	return (
		<div className='flex-page center-div'>

				<div> 
				<img src={projects} alt='Projects' />
				</div>	

				<Swiper style={{ zIndex:'0', height: '100%'}} pagination={{clickable:'true'}}>

					<SwiperSlide> 
					
						<p style={{overflow: 'auto'}}> 

							
							Dui velit, ultrices vel, ullamcorper mattis, hendrerit in, erat. Aenean vel
									quam at eros mattis commodo. Aenean feugiat iaculis justo.
									Maecenas accumsan justo ut nibh. Donec ac lectus vitae odio
							<br/><br/>
							<span className='hide-toggle' onClick={() => toggleExpand(!expand)}>Project Name 1</span>
							<span style= {hiddenText}>
								Quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per
								seacula quarta decima et quinta decima. Eodem modo typi, qui
								nunc nobis videntur parum clari, fiant sollemnes in futurum.
								Nunc varius risus.
							</span>
							<br/>
							<span className='hide-toggle' onClick={() => toggleExpand1(!expand1)}>Project Name 2</span>
							<span style= {hiddenText1}>
								Quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per
								seacula quarta decima et quinta decima. Eodem modo typi, qui
								nunc nobis videntur parum clari, fiant sollemnes in futurum.
								Nunc varius risus.
							</span>

							
		
						</p>

					</SwiperSlide>
			  
					<SwiperSlide> 
					
					</SwiperSlide>

					<SwiperSlide> 
					

					</SwiperSlide>
			  
					<SwiperSlide> 
					
					</SwiperSlide>
			
					<SwiperSlide> 
					

					</SwiperSlide>

				</Swiper>
			


		</div>
	);
}

export default TextExpand;

