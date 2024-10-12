const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files (like your CSS and JS)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const data = `${req.body.name}, ${req.body.password}\n`;
    fs.appendFile('data.txt', data, (err) => {
        if (err) throw err;
        res.json({ message: 'Data saved!' }); // Send a JSON response instead
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
