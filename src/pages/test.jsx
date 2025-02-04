import React from 'react'
import axios from 'axios'

const Test = () => {
	function test() {
		console.log('test');
		axios.get('http://localhost:5001/api/users')
		.then(res => {
			console.log(res.data); 
		})
	}

	return (
		<button onClick={test}>test</button>
	)
}

export default Test