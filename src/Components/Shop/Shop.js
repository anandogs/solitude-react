import React from 'react';
import '../App.css';
import './Shop.css';


function Shop(props) {
	return (
		<div className='flex-page' id={props.pgId}>
            <div className='img-container-desktop'>

                <img src={props.deskImg} alt={props.pgId}/>

            </div>
        <div className='content-container-desktop'>
			<div className='page-title-desktop'>
				<img src={props.titleImg} alt ='Our Story'/>
			</div>	

			<div className='text-container-desktop'> {props.text}
			</div>
            <div className='img-container-mob'>

                <img src={props.mobImg} alt={props.pgId}/>

            </div>
		<br/><br/>	
			
			<div className='center-div desktop-button'>		
<a target="_blank" rel='noopener noreferrer' href={props.linkTo}>
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

                <img src={props.mobImg} alt={props.pgId}/>

            </div>
		<br/><br/>	
			<div className='center-div mob-button'>		
<a target="_blank" rel='noopener noreferrer' href={props.linkTo}>
				<button className='mono' style={{width: '100%', border: 'none', backgroundColor: '#E75C44', padding: '.5em', color: '#F9F6ED'}} >More Info / Register</button>
</a>
			</div>

			</div>
	);
}

export default Shop;
