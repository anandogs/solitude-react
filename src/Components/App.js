import React, {useState, useEffect} from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import TextImage from './TextImage/TextImage';
import './App.css';

function App() {
  
return (
    <div className='app-overall'>
	<Header />
	<main style={{marginTop: '12vh'}}>
		<Intro />
		<TextImage />	
	</main>
    </div>
  );
}
export default App;
