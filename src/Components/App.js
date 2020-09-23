import React, {useState, useEffect} from 'react';
import Header from './Header/Header';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
import ourStory from './images/our_story.svg';
import papaya from './images/papaya.jpg';
import spinach from './images/spinach.jpg';
import turkey from './images/turkey.jpg';
import banana from './images/banana.jpg';



import './App.css';

SwiperCore.use([Pagination]);

function App() {
  
const [offsetVerticalScroll, setOffsetVerticalScroll] = useState(0);
const handleScrolling = () => setOffsetVerticalScroll(window.pageYOffset);

useEffect(() => {
	window.addEventListener('scroll', handleScrolling); 
	return () => window.removeEventListener('scroll', handleScrolling);

		}, []); 

return (
    <div>

	

	<Header />
	
	<div className="parallax-bg"style = {{ transform: `translateY(${offsetVerticalScroll * 0.5 }px)` }}/>
	<main style={{marginTop: '12vh'}}>
		<div className='first-page'>

			<h1 className='center-me'>
				Mus. Aliquam quam. Nam felis velit, semper nec, aliquam nec, iaculis vel, mi. 
			
			</h1>
			
			<Swiper style={{ zIndex:'0'}} pagination={{clickable:'true'}}>
			
			<SwiperSlide> 
			Slide 1</SwiperSlide>
			<SwiperSlide> Slide 2 </SwiperSlide>
			<SwiperSlide> Slide 3 </SwiperSlide>
			<SwiperSlide> Slide 4 </SwiperSlide>
			<SwiperSlide> Slide 5 </SwiperSlide>

			</Swiper>
		</div>

		<div className='second-page'>
			<div className='center-me'>	
				<img src={ourStory} alt ='Our Story' style={{width: '50%'}} />
			</div>	

			<span className='center-me'> In, urna. Nam eget eros a enim pulvinar rhoncus.
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
			</Swiper>
			
			
			<div className='caption-box center-me'>
			<h4>Photo heading</h4>	

			<span className='caption-text'> Iaculis sollicitudin, leo ligula cursus
				sem, eu congue metus ligula sed justo. Suspendisse.
			</span>
			</div>
		</div>
			
	</main>
    </div>
  );
}
export default App;
