import React, {useState, useEffect} from 'react';
import fb from './images/fb.png';
import insta from './images/insta.png';
import mail from './images/mail.png';
import yt from './images/yt.png';
import './Header.css';
import './BurgerMenu.css';

function BurgerMenu({open}) {

const SolitudeMenu = () => {
	return {
	transform: open ? 'translateX(0)' : 'translateX(-100%)',
	transition: 'transform 0.3s ease-in-out',
}};



  return (
	<div className = 'solitude-menu' style={SolitudeMenu()}>
		<ul>
			<li>our story</li>
			<li>csa</li>
			<li>projects</li>
			<li>resources</li>
			<li>music</li>
			<li>workshops</li>
			<li>organic cafe</li>
			<li>products</li>
			<li>get in touch</li>
		</ul>
	  		<div className = 'social-box'>
	  			<img src={fb} alt='FB'/> 
	  			<img src={insta} alt='Insta'/>
	  			<img src={mail} alt='Mail'/>
	  			<img src={yt} alt='YT'/>
	  		</div>
	</div>
  );
}

export default BurgerMenu;
