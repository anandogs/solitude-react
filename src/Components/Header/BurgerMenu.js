import React, {useState, useEffect} from 'react';
import './Header.css';

function BurgerMenu({open}) {

const SolitudeMenu = () => {
	return {
	position: 'fixed',
	left: '0',
	top: '12vh',
	width: '50vw',
	height: '80vh',
	backgroundColor: 'green',
	color: '#445641',
	fontFamily: 'monotype-grotesque,sans-serif',
	fontSize: '.75rem',
	textTransform: 'uppercase',
	transform: open ? 'translateX(0)' : 'translateX(-100%)',
	transition: 'transform 0.3s ease-in-out',

}};


const [offsetVerticalScroll, setOffsetVerticalScroll] = useState(0);
const handleScroll= () => setOffsetVerticalScroll(window.pageYOffset);

useEffect(() => {
	window.addEventListener('scroll', handleScroll); 
	return () => window.removeEventListener("scroll", handleScroll);

		}, []); 

  return (
	<div style={SolitudeMenu()}>
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
	</div>
  );
}

export default BurgerMenu;
