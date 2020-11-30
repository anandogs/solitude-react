import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
import '../App.css';
import products from './images/products.png'
import imageBlank from './images/image-blank.png'

SwiperCore.use([Pagination]);

function Shop() {

	return (

		<div className='flex-page' id='shop'>

			<div className='center-div'>
				<img src={products} alt ='Products'/>
			</div>	

			
			<div className='caption-box center-div'>

				<h4>Photo heading</h4>	

				<span className='caption-text'> Iaculis sollicitudin, leo ligula cursus
					sem, eu congue metus ligula sed justo. Suspendisse.
				</span>

			</div>

			<div className='center-div'>		
				<button className='mono' style={{width: '100%', border: 'none', backgroundColor: '#E75C44', padding: '.5em', color: '#F9F6ED'}}>Shop</button>
			</div>
		</div>
	);
}

export default Shop;
