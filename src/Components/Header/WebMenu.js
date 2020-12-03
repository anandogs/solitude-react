import React, {  useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from './images/logo.svg'
import yt from './images/yt.png'
import fb from './images/fb.png'
import insta from './images/insta.png'
import mail from './images/mail.png'


function WebMenu({open, toggleMenu}){
    
    
	const SolitudeMenu = () => {

		return {

		transform: open ? 'translateX(0)' : 'translateX(-100%)',
		transition: 'transform 0.3s ease-in-out',

	}};

    useEffect(() => {

        const introLoc= {

            'id' : '#intro-link',
            'loc' : document.querySelector('#intro').offsetTop

        }

        const permaWorkshopLoc = {

            'id' : '#perm-workshop-link',
            'loc' : document.querySelector('#perm-workshop').offsetTop

        }
        
        const eatLocalLoc = {

            'id' : '#eat-local-link',
            'loc' : document.querySelector('#eat-local').offsetTop

        }

        const pageArray = [introLoc, permaWorkshopLoc, eatLocalLoc]
        
        const closestPage = (pgArr) => {

            let minVal = window.scrollY
            let chosenPage = '#intro'
            for (let i = 0; i < pgArr.length; i++) {

                document.querySelector(pgArr[i]['id']).style.backgroundColor = 'transparent'
                document.querySelector(pgArr[i]['id']).style.color= '#78705C'
                let curVal = Math.abs(pgArr[i]['loc'] - window.scrollY)
                if (curVal < minVal) {
                    minVal = curVal
                    chosenPage = pgArr[i]['id']

                }

            }

            if (chosenPage !== '#intro' && window.innerWidth > 1150){
                
                document.querySelector(chosenPage).style.backgroundColor = '#445641';
                document.querySelector(chosenPage).style.color = '#F9F5EB';

            }

        }

        const onScroll = () => closestPage(pageArray)

        window.addEventListener('scroll', onScroll)

        return () =>{

            window.removeEventListner('scroll', onScroll)

        }

    }, [])

    return (

        <div>

            <div className='menu-web' style={SolitudeMenu()} > 

                <div className='header-img-web'>
                
                </div>
        
                    <div className='menu-list-web'>

                        <div className='logo-placeholder'>
        
                            <Link className='solitude-logo' to='intro' spy={true} smooth={true} offset={-70} duration={500}>

                                <img style={{height:'100%',}} src={logo} alt="Logo" />

                            </Link>
        
                        </div>

                        <div className='menu-items'>

                            <div className='menu-links' id='intro-link'>

                                <Link onClick={toggleMenu} 
                                    to="intro"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >

                                    <div style={{width: '100%'}}>

                                        home 

                                    </div>

                                </Link>

                            </div>

                            <div className='menu-links' id='perm-workshop-link'>
        
                                <Link onClick={toggleMenu} 
                                    to="perm-workshop"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >

                                    <div style={{width: '100%'}}>

                                        Perma Workshop 

                                    </div>

                                </Link>

                            </div>

                            <div className='menu-links' id='eat-local-link'>

                                <Link onClick={toggleMenu} 
                                    to="eat-local"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >

                                    <div style={{width: '100%'}}>

                                        Eat local week 

                                    </div>

                                </Link>

                            </div>

                        </div>

                        <div className='social-buttons'>
        
                            <a target="_blank" rel='noopener noreferrer' href={'https://www.youtube.com/channel/UCUzqkZ3vsu2DBNw0jSaxepA'}>
                            <img src={yt} alt='YouTube'/>
                            </a>
                            <a target="_blank" rel='noopener noreferrer' href={'https://www.facebook.com/solitudefarm'}>
                            <img src={fb} alt='Facebook'/>
                            </a>
                            <a target="_blank" rel='noopener noreferrer' href={'https://instagram.com/solitudefarm?igshid=1x70k36dh2bii'}>
                            <img src={insta} alt='Instagram'/>
                            </a>
                            <a target="_blank" rel='noopener noreferrer' href={'mailto: solitudepermaculture@gmail.com'}>
                            <img src={mail} alt='Mail'/>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default WebMenu
