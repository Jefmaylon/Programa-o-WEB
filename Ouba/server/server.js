const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const booksRoute = require('./route/book/booksRoute');
const PublishersRoute = require('./route/publisher/publishersRoute');
const userRoute = require('./route/User/userRoute')
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.use(PublishersRoute);
app.use(userRoute);
app.listen(3333);
