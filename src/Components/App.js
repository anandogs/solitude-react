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
    const permaText= [`We welcome you to an experiential, natural farming, permaculture workshop, at Solitude Farm in the international township of Auroville.` ,<br></br>,<br></br>,`
This workshop aims to empower you to start growing your own food and to gain an insight into knowing where our food comes from. As a participant you will also discover:`,<br></br>,<br></br>,<ul>
<li>Identifying and harvesting of the treasure trove of local plants, and transforming them into a delicious dinner</li>
<li>Experience making a circle garden to grow a variety of crops, using permaculture techniques.</li>
<li>Create your own nursery. Learn about seedlings, cuttings and seeds and optimal soil composition. Create a mini-urban garden to take home.</li> 
<li>Make our own organic soap and thus explore the importance of recycling water.</li>
<li>Learn and implement permaculture design on a field.</li>
<br></br>
<h3>Dates: 18th - 20th December</h3>
<br></br>
The fee for the workshop is Rs. 12,000/- (including accommodation, all meals, teaching materials and activities). 
<br></br>
<br></br>
For children between the age of 12-16, Rs. 5000/-, for children under 12, Rs. 2500/-.
<br></br>
<br></br>
Concessions available.</ul>]

    const permaMobText = [<p><strong>Next Workshop: 18th - 20th Dec</strong><br></br><br></br> Cost 12,000 (incl. Accomodation and Meals.) <br></br>Concessions availble.<br></br> All details in the link below</p>]
    const  permaLink = 'https://forms.gle/LRTJnHQ3XgvMD2hQ7'

    const eatLocalText = [<p>The Eat Local Week  " 6days farm to table food festival"  which will run from the <strong>14th to 19th December</strong> at Solitude Farm is an amazing opportunity to explore and get to grips with local foods.<br/><br/>
Local foods are easy to grow, use less water, have a high nutritional and medicinal value and are cheaper. They are also relevant both culturally and socially. <br/><br/>
We invite you to come and harvest every morning at 6:30 with the aim to eat at 8 am or even a little earlier. After breakfast you are free to go (or help on the farm) and come back at lunch time.<br/><br/>
If you have time you can help at the Solitude Farm Cafe with lunch preparation but people who have jobs or other activities can just come and eat.<br/><br/>
For the evening meal participants can come at 5:00 to harvest with the aim to eat by 7pm.<br/><br/>

<strong>The cost of the week is Rs. 6000 non-residential and Rs. 8500 residential.</strong><br/><br/>
Concessions available for Aurovillians.<br/><br/>

If you want to join please fill out the google form (link below) and make the payment to secure your place.</p>]

const eatLocalMobText = [<p><strong>Next Eat Local Week: 14th - 19th Dec</strong><br></br><br></br> Cost 6,000 (non-residential), 8500 (residential) <br></br>Concessions availble.<br></br> All details in the link below</p>]
    const eatLocalLink = 'https://forms.gle/tNQZ381yjpoD2EYo7' 

return (
    <div className='app-overall'>
    <Header />
        <main>
            <Intro />
            <Shop titleImg={require('./TextImage/images/WeekendParmacultureWorkshop.png')} pgId = 'perm-workshop' deskImg={require('./TextImage/images/perma.jpg')} mobImg={require('./TextImage/images/perma-mob.png')} text={permaText} mobText={permaMobText} linkTo={permaLink}/>
            <Shop titleImg={require('./TextImage/images/EatLocalWeek.png')} pgId = 'eat-local' deskImg={require('./TextImage/images/eat-local.jpg')} mobImg={require('./TextImage/images/eat-local-mob.jpg')} text={eatLocalText} mobText={eatLocalMobText} linkTo={eatLocalLink}/>
        </main>
    </div>
  );
}
export default App;
