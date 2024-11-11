const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
// MongoDB Connection
mongoose.connect('your cloud mongoose db connect string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/', todoRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port localhost://${PORT}`));
