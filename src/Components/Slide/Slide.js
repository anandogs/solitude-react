import React, { useEffect } from 'react';
import imageBlank from './images/img-blank.png';
import imageBlank1 from './images/img-blank1.png';
import imageBlank2 from './images/img-blank2.png';
import chevronRight from './images/chevron-right.png';
import chevronLeft from './images/chevron-left.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Slide.css';

function Slide(props) {
    useEffect(() => {
        const images = document.querySelectorAll('.container-slide img');
        const tracker= document.querySelector('#tracker');
        const scroller = document.querySelector('#scroller')
        const imgLength = images.length;
        const containerSize = tracker.offsetWidth; 
        const scrollSize = containerSize / imgLength
        scroller.style.width = `${scrollSize}px`
    }); 
    let counter = 0;
    const nextImage= () => {
        const scroller = document.querySelector('#scroller')
        const scrollerWidth = scroller.offsetWidth;
        const imageSlide = document.querySelector('.container-slide');
        const images = document.querySelectorAll('.slideImg')
        const imgLength = images.length
        const size = images[0].clientWidth;
        counter = counter + 1;
        if (counter >= imgLength) {
            counter = imgLength - 1
        };
        let imgIncrement = -counter*size
        let scrollIncrement = counter*scrollerWidth
        scroller.style.transform= `translateX(${scrollIncrement}px)`;
        imageSlide.style.transform= `translateX(${imgIncrement}px)`;
    }
    const prevImage= () => {
        const scroller = document.querySelector('#scroller')
        const scrollerWidth = scroller.offsetWidth;
        const imageSlide = document.querySelector('.container-slide');
        const images = document.querySelectorAll('.slideImg')
        const size = images[0].clientWidth;
        counter = counter -1;
        if (counter < 0) {
            counter = 0
        };
        let imgIncrement = -counter*size
        let scrollIncrement = counter*scrollerWidth
        scroller.style.transform= `translateX(${scrollIncrement}px)`;
        imageSlide.style.transform= `translateX(${imgIncrement}px)`;
    }
    if (props.image) {
	return (

		<div style={{height: '100vh', width: '564px', display: 'flex', flexDirection: 'column', position: 'relative'}}>
            <div className='container'>
                <div className='container-slide'>
                    <img className='slideImg' src={props.image[0]} alt='Blank'/>
                    <img className='slideImg' src={imageBlank1} alt='Blank'/>
                    <img className='slideImg' src={imageBlank2} alt='Blank'/>
                </div>
            </div>

                <img src={chevronRight} alt='Blank'id='nextBtn' onClick={nextImage} />
                <img src={chevronLeft} alt='Blank'id='prevBtn' onClick={prevImage} />
            <div id='tracker'>
            <div id='scroller'/>
            </div>
        <br/><br/>
		</div>
	);
        
}
    else {
	return (

		<div style={{height: '100vh', width: '564px', display: 'flex', flexDirection: 'column', position: 'relative'}}>
            <div className='container'>
                <div className='container-slide'>
                    <img className='slideImg' src={imageBlank1} alt='Blank'/>
                    <img className='slideImg' src={imageBlank2} alt='Blank'/>
                </div>
            </div>

                <img src={chevronRight} alt='Blank'id='nextBtn' onClick={nextImage} />
                <img src={chevronLeft} alt='Blank'id='prevBtn' onClick={prevImage} />
            <div id='tracker'>
            <div id='scroller'/>
            </div>
        <br/><br/>
		</div>
	);
        
}
}

export default Slide;