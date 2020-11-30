import React from 'react';
import './TextImage.css';
import '../App.css';

function TextImage(props) {
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
			
			<div className='caption-container-desktop'>

				<h4>Photo heading</h4>	

				<span className='caption-text'>{props.caption} 
				</span>

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
			
			<div className='caption-container-mob'>

				<h4>Photo heading</h4>	

				<span className='caption-text'>{props.caption} 
				</span>

			</div>
		</div>
	);
}

export default TextImage;
