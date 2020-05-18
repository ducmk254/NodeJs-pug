const express = require('express');
let app = express();

app.set('view engine','pug'); // khai bao view engine
app.set('views','./views');   // khai bao path cho views


app.get('/',(req,res)=>{{
    res.render('home.pug');
}})



app.listen(3001,()=>console.log('Server started...'));
