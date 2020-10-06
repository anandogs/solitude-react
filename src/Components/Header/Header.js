import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from './images/logo.svg'
import yt from './images/yt.png'
import fb from './images/fb.png'
import insta from './images/insta.png'
import mail from './images/mail.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines} from '@fortawesome/free-solid-svg-icons'
import BurgerMenu from './BurgerMenu';
import Menu from './Menu';

function Header() {

	const [open, setOpen] = useState(false)

	const toggleMenu = () => {
		setOpen(!open)
	};
    return (
    <div>
        <webMenu />

        <div className='menu-mob'> 
            <div className='burger' onClick={toggleMenu}>	
                <FontAwesomeIcon icon={faGripLines} />
            </div>	
            <BurgerMenu open={open} toggleMenu={toggleMenu}/>
            <Link className='solitude-logo' to='intro' spy={true} smooth={true} offset={-70} duration={500}>
                <img style={{width:'100%',}} src={logo} alt="Logo" />
            </Link>
        </div>
    </div>
    );
};

export default Header;

