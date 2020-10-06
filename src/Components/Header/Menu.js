import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from './images/logo.svg'
import yt from './images/yt.png'
import fb from './images/fb.png'
import insta from './images/insta.png'
import mail from './images/mail.png'


function webMenu() {
    
    useEffect(() => {

        const ourStoryLoc = {
            'id' : '#our-story-link',
            'loc' : document.querySelector('#our-story').offsetTop
        }
        
        const csaLoc = {
            'id' : '#csa-link',
            'loc' : document.querySelector('#csa').offsetTop
        }
        const projectsLoc = {
            'id': '#projects-link',  
            'loc':  document.querySelector('#projects').offsetTop
        }
        const shopLoc = {
            'id': '#shop-link', 
            'loc': document.querySelector('#shop').offsetTop
        }
        const contactLoc = {
            'id': '#contact-link',
            'loc': document.querySelector('#contact').offsetTop
        }
        const pageArray = [ourStoryLoc, csaLoc, projectsLoc, shopLoc, contactLoc]
        
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
            if (chosenPage !== '#intro'){
                
                document.querySelector(chosenPage).style.backgroundColor = '#445641';
                document.querySelector(chosenPage).style.color = '#F9F5EB';
            }

        }

        const onScroll = () => closestPage(pageArray)
        window.addEventListener('scroll', onScroll)
    }, [])

    return (
        <div>
            <div className='menu-web'> 
                <div className='header-img-web'>
                
                </div>
                    <div className='menu-list-web'>
                        <div className='logo-placeholder'>
                            <Link className='solitude-logo' to='intro' spy={true} smooth={true} offset={-70} duration={500}>
                                <img style={{height:'100%',}} src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className='menu-items'>
                            <div className='menu-links' id='our-story-link'>
                                <Link style={{alignItems: 'center'}} 
                                    to="our-story"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                our story
                                </Link>
                            </div>
                            <div className='menu-links' id='csa-link'>
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
                            <div className='menu-links' id='projects-link'>
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
                            <div className='menu-links' id='shop-link'>
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
                            <div className='menu-links' id='contact-link'>
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
                            <img src={yt} alt='YouTube'/>
                            <img src={fb} alt='Facebook'/>
                            <img src={insta} alt='Instagram'/>
                            <img src={mail} alt='Mail'/>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Menu
