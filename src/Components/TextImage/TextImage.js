import React from 'react';
import ourStory from './images/our-story.png';
import imageBlank from './images/img-blank.jpg';
import Slide from '../Slide/Slide';
import './TextImage.css';
import '../App.css';


function TextImage() {
	return (
		<div className='flex-page' id='our-story'>


			<div className='center-div' id='heading-container'>
				<img src={ourStory} alt ='Our Story'/>
			</div>	
			<div className='center-div'> In, urna. Nam eget eros a enim pulvinar rhoncus.
				Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nulla facilisis massa ut massa. Sed nisi purus,
                malesuada eu.  Amet, elit.

			</div>
			
            <div className='img-container'>
            </div>
        
			<div className='caption-box center-div' id='caption-container'>

				<h4>Photo heading</h4>	

				<span className='caption-text'> Iaculis sollicitudin, leo ligula cursus
					sem, eu congue metus ligula sed justo. Suspendisse.
				</span>

			</div>
		</div>
	);
}

export default TextImage;
