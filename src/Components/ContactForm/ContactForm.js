import React from 'react';
import '../App.css';
import contact from './images/contact.png'


function ContactForm() {

	return (

		<div className='flex-page center-div' id='contact'>

				<div> 
				<img src={contact} alt='Contact Us' />
				</div>	

				<div>
					Maecenas a dolor. Praesent tempor, felis
					eget gravida blandit, urna lacus faucibus velit, in
					consectetuer sapien erat nec quam. Integer bibendum odio sit
				</div>
				<div>
					<label className='mono'>full name</label>
					<br/>
					<input defaultValue='Mimansa Sahay'style={{fontFamily: 'monarcha,serif', backgroundColor: '#485543', border: 'none', color: '#F9F6ED', padding: '.5em', width:'100%'}}></input>
					<br/>
					<label className='mono'>email address</label>
					<br/>
					<input defaultValue='mimansa@tidextide.in'style={{fontFamily: 'monarcha, serif', backgroundColor: '#485543', border: 'none', color: '#F9F6ED', padding: '.5em', width:'100%'}}></input>
					<br/>
					<label className='mono'>message</label>
					<br/>
					<textarea defaultValue='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.'
					style={{fontFamily: 'monarcha, serif', backgroundColor: '#485543', border: 'none', color: '#F9F6ED', padding: '.5em', width:'100%', height: '20vh'}}></textarea>
					<br/>
					<br/>
					<button className='mono' style={{width: '100%', border: 'none', backgroundColor: '#E75C44', padding: '.5em', color: '#F9F6ED'}}>Send</button>
				</div>
			



		</div>
	);
}

export default ContactForm;

