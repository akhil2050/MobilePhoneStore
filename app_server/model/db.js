const mongoose = require("mongoose");

const dbURI = "mongodb+srv://akhilmanual:PASSWORD_on_REQUEST@cluster0.holxq.mongodb.net/MobilePhoneStore?retryWrites=true&w=majority";
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to :', dbURI);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error :', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

require('./phone');