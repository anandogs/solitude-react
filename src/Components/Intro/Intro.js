import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
import YouTube from 'react-youtube'
import '../App.css';

SwiperCore.use([Pagination]);

function Intro() {
	    const opts = {
            width: '100%',
            height: '90%', 
            playerVars: {
                autoplay: 1,
                },
            };
  return (
	<div className='flex-page' id='intro'>

        <h1 className='center-div'>

                Mus. Aliquam quam. Nam felis velit, semper nec, aliquam nec, iaculis vel, mi. 
        
        </h1>
		<Swiper style={{backgroundColor: 'black'}}pagination={{clickable:'true'}}>
		
			<SwiperSlide> <YouTube videoId='vuIyuCWx3bc' opts ={opts}/> </SwiperSlide>
			<SwiperSlide> <YouTube videoId='0U-tU08Zpi8' opts ={opts}/> </SwiperSlide>
			<SwiperSlide> <YouTube videoId='7jUn_PDxCrA' opts ={opts}/> </SwiperSlide>
			<SwiperSlide> <YouTube videoId='atJqPo6njzE' opts ={opts}/> </SwiperSlide>

		</Swiper>
	</div>

  );
}

export default Intro;
