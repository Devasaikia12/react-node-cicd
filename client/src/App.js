import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		getUsername();
		getEmail();
	}, []);
	const getUsername = async () => {
		const response = await axios.get('/names');
		console.log(response);
		setUserName(response.data);
	};

	const getEmail = async () => {
		const res = await axios.get('/email');
		setEmail(res.data);
	};

	return (
		<div className="">
			<h1>Name: {userName}</h1>
			<h4>Email: {email}</h4>
		</div>
	);
}

export default App;
