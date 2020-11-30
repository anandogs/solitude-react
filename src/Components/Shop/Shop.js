import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper-bundle.css'
import '../App.css';
import './Shop.css';
import products from './images/products.png'
import imageBlank from './images/image-blank.png'

SwiperCore.use([Pagination]);

function Shop(props) {

	return (
		<div className='flex-page' id={props.pgId}>
            <div className='img-container-desktop'>

                <img src={props.deskImg}/>

            </div>
        <div className='content-container-desktop'>
			<div className='page-title-desktop'>
				<img src={props.titleImg} alt ='Our Story'/>
			</div>	

			<div className='text-container-desktop'> {props.text}
			</div>
            <div className='img-container-mob'>

                <img src={props.mobImg}/>

            </div>
		<br/><br/>	
			
			<div className='center-div desktop-button'>		
				<button className='mono' style={{width: '100%', border: 'none', backgroundColor: '#E75C44', padding: '.5em', color: '#F9F6ED'}}>Shop</button>
			</div>
        </div>
			<div className='page-title-mob'>
				<img src={props.titleImg} alt ='Our Story'/>
			</div>	

			<div className='text-container-mob'> {props.text}
			</div>
            <div className='img-container-mob'>

                <img src={props.mobImg}/>

            </div>
		<br/><br/>	
			<div className='center-div mob-button'>		
				<button className='mono' style={{width: '100%', border: 'none', backgroundColor: '#E75C44', padding: '.5em', color: '#F9F6ED'}}>Shop</button>
			</div>

			</div>
	);
}

export default Shop;
