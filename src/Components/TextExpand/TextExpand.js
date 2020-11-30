import React from 'react';
import './TextExpand.css';
import '../App.css';

function TextExpand(props) {
	return (
		<div className='flex-page' id={props.pgId}>
            <div className='img-container-desktop'>

                <img src={props.deskImg}/>

            </div>
        <div className='content-container-desktop'>
			<div className='page-title-desktop'>
				<img src={props.titleImg} alt ='Our Story'/>
			</div>	

			<div className='text-container-desktop'> 
			Sem. Pellentesque
        tellus augue, tempus nec, laoreet at, porttitor blandit, leo. Phasellus
        in odio. Duis lobortis, metus eu laoreet tristique, pede mi congue mi,
        quis posuere augue nulla a augue. Pellentesque sed est. Mauris cursus
        urna id lectus. Integer dignissim feugiat eros. Sed tempor volutpat
        dolor. Vestibulum vel lectus nec mauris.
        <br/><br/>        
        <h3>Project</h3>
        <br/> Lectores legere me lius quod ii legunt saepius. Claritas est
        etiam processus dynamicus, qui sequitur mutationem consuetudium
        lectorum. Mirum est notare quam littera gothica, quam nunc putamus
        parum claram, anteposuerit litterarum.
            </div>
            <div className='img-container-mob'>

                <img src={props.mobImg}/>

            </div>
			
			<div className='caption-container-desktop'>

				<h4>Photo heading</h4>	

				<span className='caption-text'>{props.caption} 
				</span>

			</div>
        </div>
			<div className='page-title-mob'>
				<img src={props.titleImg} alt ='Our Story'/>
			</div>	

            <div className='text-container-mob scroll'> Sem. Pellentesque
        tellus augue, tempus nec, laoreet at, porttitor blandit, leo. Phasellus
        in odio. Duis lobortis, metus eu laoreet tristique, pede mi congue mi,
        quis posuere augue nulla a augue. Pellentesque sed est. Mauris cursus
        urna id lectus. Integer dignissim feugiat eros. Sed tempor volutpat
        dolor. Vestibulum vel lectus nec mauris.
        <br/><br/>        
        <h3>Project</h3>
        <br/> Lectores legere me lius quod ii legunt saepius. Claritas est
        etiam processus dynamicus, qui sequitur mutationem consuetudium
        lectorum. Mirum est notare quam littera gothica, quam nunc putamus
        parum claram, anteposuerit litterarum.
            
			</div>
			
		</div>
	);
}

export default TextExpand;
