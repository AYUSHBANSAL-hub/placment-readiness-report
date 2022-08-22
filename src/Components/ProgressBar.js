import React from 'react'
import "../Styles/ProgressBar.css";
const ProgressBar = ({role,bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '191px',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		marginTop:5
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius:10,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
		<div>
			<p id='role-name'>{role}</p>
			<div style={Parentdiv}>
				<div style={Childdiv}>
					<span style={progresstext}></span>
				</div>
			</div>
			<p id='role-readyness'>{progress}% for this role</p>
		</div>
	)
}

export default ProgressBar;
