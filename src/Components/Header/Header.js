import React, {useState} from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from './images/logo.svg'
import bgimg from './images/header-background.png'
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
            <div className='menu-web'> 
                <div className='header-img-web'></div>
                <div className='menu-list-web'>
                    <div className='logo-placeholder'>
                        <Link className='solitude-logo' to='intro' spy={true} smooth={true} offset={-70} duration={500}>
                            <img style={{width:'100%',}} src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className='menu-items'>
                        <div className='menu-links'>
                            <Link 
                                to="our-story"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            our story
                            </Link>
                        </div>
                        <div className='menu-links'>
                            <Link 
                                to="csa"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            csa
                            </Link>
                        </div>
                        <div className='menu-links'>
                            <Link 
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            projects
                            </Link>
                        </div>
                        <div className='menu-links'>
                            <Link 
                                to="shop"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            products
                            </Link>
                        </div>
                        <div className='menu-links'>
                            <Link 
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            get in touch	
                            </Link>
                        </div>
                    </div>
                    <div className='social-buttons'>
                        yt, fb etc
                    </div>
                </div>
            </div>
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

