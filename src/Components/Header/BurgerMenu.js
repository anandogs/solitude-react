import React from 'react';
import './Header.css';

function BurgerMenu({open}) {
	console.log({open})

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
