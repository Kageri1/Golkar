const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const mongoUrl = 'mongodb+srv://Deki:Deki2005@golkar.twhegjr.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use(bodyParser.json());

const port = process.env.PORT || 3000;
    app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
