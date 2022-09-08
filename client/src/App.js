import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [userName, setUserName] = useState('');

	useEffect(() => {
		getUsername();
	}, []);
	const getUsername = async () => {
		const response = await axios.get('/names');
		console.log(response);
		setUserName(response.data);
	};

	return (
		<div className="">
			<h1>My Name is {userName}</h1>
		</div>
	);
}

export default App;
