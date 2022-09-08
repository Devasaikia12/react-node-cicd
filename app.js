const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express midlerware for static file
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('/names', (req, res) => {
	res.send('Twilo');
});

app.listen(5000, () => {
	console.log(`App is ruuning on port 5000`);
});
