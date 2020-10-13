import React from 'react';
import ourStory from './images/our-story.png';
import imageBlank from './images/img-blank.png';
import Slide from '../Slide/Slide';
import './TextImage.css';
import '../App.css';


function TextImage() {

	return (

		<div className='flex-page' id='our-story'>

            <div className='img-container' id='image-container'>
                <Slide imgSrc={['Hello', 'Goodbye']}/>
            </div>
            <div className='heading-text-caption'>

			<div className='center-div' id='heading-container'>
				<img src={ourStory} alt ='Our Story'/>
			</div>	
			<div className='center-div' id='text-container' style={{paddingBottom: '1em'}}> In, urna. Nam eget eros a enim pulvinar rhoncus.
				Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Nulla facilisis massa ut massa. Sed nisi purus,
                malesuada eu.  Amet, elit.

                Curabitur urna tellus, aliquam vitae, ultrices eget, vehicula nec, diam.
                Integer elementum, felis non faucibus euismod, erat massa dictum eros,
                eu ornare ligula tortor et mauris. Cras molestie magna in nibh. Aenean
                et tellus. Fusce adipiscing commodo erat. In eu.
			</div>
			
			<div className='caption-box center-div' id='caption-container'>

				<h4>Photo heading</h4>	

				<span className='caption-text'> Iaculis sollicitudin, leo ligula cursus
					sem, eu congue metus ligula sed justo. Suspendisse.
				</span>

			</div>
        </div>
		</div>
	);
}

export default TextImage;
