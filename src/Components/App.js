import React from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import TextImage from './TextImage/TextImage';
import Text from './Text/Text';
import TextExpand from './TextExpand/TextExpand';
import ContactForm from './ContactForm/ContactForm';
import Shop from './Shop/Shop';
import Slide from './Slide/Slide';
import './App.css';

function App() {
  
return (
    <div className='app-overall'>
    <Header />
        <main>
            <Intro />
            <TextImage />	
            <Text />
            <TextExpand />
            <Shop />
            <ContactForm />
            <Slide />
        </main>
    </div>
  );
}
export default App;
