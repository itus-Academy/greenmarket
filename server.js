const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const dotenv = require('dotenv') 
const User = require('./models/user.js');

dotenv.config();

const app = express(); 
                          

mongoose.connect(

    process.env.DATABASE,  
    {useNewUrlParser : true, useUnifiedTopology:true},
    (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected to the database")
    }

})

//middleware configuration to pass data from the front end
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    
    extended : false

}));


const productRoutes =require('./routes/product');
app.use('/api', productRoutes )

app.listen(3000, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(" We wellcome you all to this development ");
    }
})