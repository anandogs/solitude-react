import React from 'react';
import '../App.css';
import './Shop.css';
import products from './images/products.png'
import imageBlank from './images/image-blank.png'


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
<a target="_blank" href={props.linkTo}>
				<button className='mono' style={{width: '100%', border: 'none', backgroundColor: '#E75C44', padding: '.5em', color: '#F9F6ED', cursor: 'pointer'}} >More Info / Register</button>
</a>
			</div>
        </div>
			<div className='page-title-mob'>
				<img src={props.titleImg} alt ='Our Story'/>
			</div>	

			<div className='text-container-mob'> {props.mobText}
			</div>
            <div className='img-container-mob'>

                <img src={props.mobImg}/>

            </div>
		<br/><br/>	
			<div className='center-div mob-button'>		
<a target="_blank" href={props.linkTo}>
				<button className='mono' style={{width: '100%', border: 'none', backgroundColor: '#E75C44', padding: '.5em', color: '#F9F6ED'}} >More Info / Register</button>
</a>
			</div>

			</div>
	);
}

export default Shop;
