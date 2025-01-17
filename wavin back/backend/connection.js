const mongoose = require('mongoose');


const url = 'mongodb+srv://basilbazzi2:basil@cluster0.rcfcr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url)
    .then(() => {
        console.log("Connected Established!")
    })