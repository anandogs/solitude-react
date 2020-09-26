import React, {useState, useEffect} from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import TextImage from './TextImage/TextImage';
import './App.css';

function App() {
  
const [offsetVerticalScroll, setOffsetVerticalScroll] = useState(0);
const handleScroll= () => setOffsetVerticalScroll(window.pageYOffset);

useEffect(() => {
	window.addEventListener('scroll', handleScroll); 
	return () => window.removeEventListener("scroll", handleScroll);

		}, []); 

return (
    <div>
	<Header />
	<div className="parallax-bg"style = {{ transform: `translateY(${offsetVerticalScroll * 0.5 }px)` }}/>
	<main style={{marginTop: '12vh'}}>
		<Intro />
		<TextImage />	
	</main>
    </div>
  );
}
export default App;
