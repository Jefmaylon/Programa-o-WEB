const express = require('express');

const bodyParser = require("body-parser");
  
const app = express();
const booksRoute = require('./route/book/booksRoute');
const PublishersRoute = require('./route/publisher/publishersRoute');
app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.use(PublishersRoute);
app.listen(3000);
