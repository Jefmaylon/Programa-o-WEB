const express = require('express');
const connectDB = require('./DB/connection');
const app = express();

// connectDB();
app.use(express.json ({extended: false}));
app.use('/api/userModel', require('./API/User'));
const Port = process.env.Port || 4000;

app.listen(Port, ()=>console.log("Conectou!!!"));