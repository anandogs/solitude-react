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
    const ourStoryText = 'In, urna. Nam eget eros a enim pulvinar rhoncus.\
				Cum sociis natoque penatibus et magnis dis parturient montes, nascetur\
                ridiculus mus. Nulla facilisis massa ut massa. Sed nisi purus,\
                malesuada eu.  Amet, elit.'
    const ourStoryCaption = 'Iaculis sollicitudin, leo ligula cursus\
					sem, eu congue metus ligula sed justo. Suspendisse.'

return (
    <div className='app-overall'>
    <Header />
        <main>
            <Intro />
            <TextImage titleImg={require('./TextImage/images/our-story.png')} pgId = 'our-story' deskImg={require('./TextImage/images/img-blank.jpg')} mobImg={require('./TextImage/images/img-blank.jpg')} text={ourStoryText} caption={ourStoryCaption}/>	
            <TextImage titleImg={require('./TextImage/images/csa.png')} pgId = 'csa' deskImg={require('./TextImage/images/img-blank.jpg')} mobImg={require('./TextImage/images/img-blank.jpg')} text={ourStoryText} caption={ourStoryCaption}/>	
            <TextExpand titleImg={require('./TextImage/images/projects.png')} pgId = 'projects' deskImg={require('./TextImage/images/img-blank.jpg')} mobImg={require('./TextImage/images/img-blank.jpg')} text={ourStoryText} caption={ourStoryCaption}/>	
            <Shop />
            <ContactForm />
        </main>
    </div>
  );
}
export default App;
