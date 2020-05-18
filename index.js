const express = require('express');
let app = express();
const port = 3001;

app.set('view engine','pug'); // khai bao view engine
app.set('views','./views');   // khai bao path cho views


app.get('/',(req,res)=>{{
    res.render('home');
}});

app.get('/learn',(req,res)=>{
    res.render('learn');
});




app.listen(port,()=>console.log('Server started with port '+ port +'...'));
