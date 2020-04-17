const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser'); 

const app = express(); 

//middleware configuration to pass data from the front end
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req,res)=>{
    res.send('we are the Greenmarket developers')
});

app.post('/', (req,res)=>{
    console.log(req.body.name);
} );

app.listen(3000, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("we wellcome you all to this development");
    }
})