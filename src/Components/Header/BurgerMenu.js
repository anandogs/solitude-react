import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import './BurgerMenu.css';
import fb from './images/fb.png';
import insta from './images/insta.png';
import mail from './images/mail.png';
import yt from './images/yt.png';

function BurgerMenu({open, toggleMenu}) {

	const SolitudeMenu = () => {
		return {
		transform: open ? 'translateX(0)' : 'translateX(-100%)',
		transition: 'transform 0.3s ease-in-out',
	}};



	  return (
		<div className = 'solitude-menu' style={SolitudeMenu()}>
			<ul>
				<li><Link onClick={toggleMenu} 
				    to="perm-workshop"
				    spy={true}
				    smooth={true}
				    offset={-70}
				    duration={500}
				>
			    Weekend permaculture workshop	
				</Link></li>
				<li><Link onClick={toggleMenu} 
				    to="eat-local"
				    spy={true}
				    smooth={true}
				    offset={-70}
				    duration={500}
				>
			    Eat local week	
				</Link></li>
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
