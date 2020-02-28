import express from 'express';
import creatError from 'http-errors';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from "./src/router/routes";
const PORT = 4000;

const app = express();

//body parser
app.use(express.urlencoded({ extended : false }));
app.use(express.json());

// return static objects
app.use(express.static('public'));

// enable cors
app.use(cors());

// mongo connection
mongoose.connect('mongodb://localhost:27017/nodeapp', {useNewUrlParser: true, useUnifiedTopology: true});

// setting up routes
routes(app);

// Error Page
app.use((req, res, next)=>{
    next(creatError(404));
});

// listening to port for request
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT} `);
});