/*const mongoose = require('mongoose');

const URI = 'mongodb+srv://jefferson:marrygaganight@cluster0.jkzpy.mongodb.net/test';
console.log('Banco de dados 1');
const connectDB = async ()=> {
  await mongoose.connect(URI, {
      useUnifiedTopology: true, 
      useNewUrlParser: true
    });

  console.log('Banco de dados conectado!!');
};

module.exports = connectDB;*/


const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://jefferson:marrygaganight@cluster0.jkzpy.mongodb.net/test';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('Conectou agora');
  // perform actions on the collection object
  // client.close();
});


module.exports = client;