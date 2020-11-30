import React from 'react';
import '../App.css';
import './ContactForm.css';
import contact from './images/contact.png'


function ContactForm(props) {

	return (
		<div className='flex-page' id={props.pgId}>
            <div className='img-container-desktop'>

                <img src={props.deskImg}/>

            </div>
        <div className='content-container-desktop'>
			<div className='page-title-desktop'>
				<img src={props.titleImg} alt ='Our Story'/>
			</div>	

            <div className='text-container-desktop'> Quam. Phasellus placerat.
        In sem nisl, elementum vitae, venenatis nec, lacinia ac, arcu.
        Pellentesque gravida egestas mi. Integer rutrum tincidunt libero.

Duis.

			</div>
            <div className='img-container-mob'>

                <img src={props.mobImg}/>

            </div>
        <br/><br/>
				<div className='desktop-contact'>
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
			<div className='page-title-mob'>
				<img src={props.titleImg} alt ='Our Story'/>
			</div>	

            <div className='text-container-mob contact-page'> Tellus, aliquam vitae,
        ultrices eget, vehicula nec, diam. Integer elementum, felis non
        faucibus euismod, erat massa dictum eros, eu ornare ligula.

			</div>
				<div className='mob-contact'>
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

