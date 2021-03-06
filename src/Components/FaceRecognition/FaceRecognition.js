import React from 'react';
import './FaceRecognition.css';

function FaceRecognition({ imageUrl, box }) {
	return(
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' />
				<div className='boundBox' style={{left: box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow }} ></div>
			</div>
		</div>
	);	
}

export default FaceRecognition;