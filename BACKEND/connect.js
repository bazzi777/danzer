const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://basilbazzi2:basil@cluster0.rcfcr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

  .then(() => console.log('Connected!'));