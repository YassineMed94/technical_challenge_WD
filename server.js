const express = require('express');
const app = express();
const phones = require('./data/phones.json');
const cors = require('cors');

app.use(cors());

app.get('/phones', (req, res) => {
	res.json(phones);
});

app.get('/phones/:id', (req, res) => {
	const phoneId = parseInt(req.params.id, 10);
	const phone = phones.find((phon) => phon.id === phoneId);

	if (!phone) {
		return res.status(404).json({ error: 'Phone not found' });
	}

	res.json(phone);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});