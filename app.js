const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/names', (req, res) => {
	res.send('Twilo');
});

app.listen(5000, () => {
	console.log(`App is ruuning on port 5000`);
});
