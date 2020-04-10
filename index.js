const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/getDetails', require('./routes/api/getDetails'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Started on port: " + PORT));


