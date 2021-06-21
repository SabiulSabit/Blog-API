//external package
const express =  require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const  cors = require('cors');


require('dotenv').config();

//app
const app = express();


//middleware

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cookieParser());
app.use(cors());


//connect to db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then( () =>{ 
    console.log("Connected To Database");
} )


//run the server
const port = process.env.PORT || 8000 ;
app.listen(port, ()=>{
    console.log("Server is Running on Port: "+port);
})