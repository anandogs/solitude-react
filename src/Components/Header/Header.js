import React, {useState} from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from './images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines} from '@fortawesome/free-solid-svg-icons'
import BurgerMenu from './BurgerMenu';


function Header() {

	const [open, setOpen] = useState(false)

	const toggleMenu = () => {
		setOpen(!open)
	};
  return (
    <div className='header-style'>
	<div className='burger' onClick={toggleMenu}>	
		<FontAwesomeIcon icon={faGripLines} />
	</div>	
	
	<BurgerMenu open={open} toggleMenu={toggleMenu}/>
	<Link className='solitude-logo' to='intro' spy={true} smooth={true} offset={-70} duration={500}>
		<img style={{height:'100%',}} src={logo} alt="Logo" />
	  </Link>
    </div>
  );
};

export default Header;

