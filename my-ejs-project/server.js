const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Gjør css-mappen tilgjengelig for nettleseren
app.use(express.static(path.join(__dirname, 'css')));

// Define a route to render the index.ejs file
app.get('/', (req, res) => {
    res.render('index', { message: 'click to redeem for free!!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
