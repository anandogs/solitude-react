import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from './images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines} from '@fortawesome/free-solid-svg-icons'
import WebMenu from './WebMenu';

function Header() {

    const curState = () => {
        if (window.innerWidth <= 1150){
            return false
        }
        else {
            return true
        }
    }

	const [open, setOpen] = useState(curState())

	const toggleMenu = () => {
        if (window.innerWidth <= 1150){
            setOpen(!open)
        }
	};
    return (
    <div>
        <div className='menu-mob'> 
            <div className='burger' onClick={toggleMenu}>	
                <FontAwesomeIcon icon={faGripLines} />
            </div>	
            <div className='solitude-logo'>
                <Link to='intro' spy={true} smooth={true} offset={-70} duration={500}>
                    <img style={{height:'100%',}} src={logo} alt="Logo" />
                </Link>
            </div>
        </div>

        <div className='web-menu'>
            <WebMenu className='web-menu' open={open} toggleMenu={toggleMenu}/>
        </div>

    </div>
    );
};

export default Header;

