import React, {useState, useEffect} from 'react';
import Header from './Header/Header';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
import ourStory from './images/our_story.svg';

import './App.css';

SwiperCore.use([Pagination]);

function App() {
  
const [offsetVerticalScroll, setOffsetVerticalScroll] = useState(0);
const handleScrolling = () => setOffsetVerticalScroll(window.pageYOffset);


const slides=[];

for (let i = 0; i < 5; i+=1) {
	slides.push(
		<SwiperSlide key={`slide-${i}`} >
			<img src={`https://picsum.photos/id/${i+1}/500/300`} />
		</SwiperSlide>
		   );
}

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

			<h1>
				Mus. Aliquam quam. Nam felis velit, semper nec, aliquam nec, iaculis vel, mi. 
			
			</h1>
			
			<Swiper style={{ zIndex:'0'}} pagination={{clickable:'true'}}>
				{slides}
			</Swiper>
		</div>

		<div className='second-page'>
			
			<img src={ourStory} alt ='Our Story' style={{width: '50%'}} />
			<div/> 
		</div>
			
	</main>
    </div>
  );
}
export default App;
