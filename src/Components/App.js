import React, {useState, useEffect} from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import TextImage from './TextImage/TextImage';
import Text from './Text/Text';
import TextExpand from './TextExpand/TextExpand';
import './App.css';

function App() {
  
return (
    <div className='app-overall'>
	<Header />
	<main style={{marginTop: '12vh'}}>
		<Intro />
		<TextImage />	
		<Text />
		<TextExpand />
	</main>
    </div>
  );
}
export default App;
