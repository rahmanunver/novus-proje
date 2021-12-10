const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/projects', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/projects.html'));
});

app.get('/contact-us', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/contact.html'));
});


app.listen(process.env.PORT || port, () => { console.log(`Example app listening at http://localhost:${port}`) })