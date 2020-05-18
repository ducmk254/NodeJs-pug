const express = require('express');
let app = express();
const port = 3001;
const reload = require('reload'); //eslint-disable-line





app.set('view engine','pug'); // khai bao view engine
app.set('views','./views');   // khai bao path cho views


app.get('/',(req,res)=>{{
    res.render('home');
}});

app.get('/learn',(req,res)=>{
    res.render('learn');
});


//Reload code here
// const server = require('http').createServer(app);
// reload(app).then(()=>{
//     server.listen(app.get('port'),()=>{
//         console.log('Server started with port '+ app.get('port') +'...');
//     });
// });

reload(app);
app.listen(port,()=>console.log('Server is started with :' + port + ' port'));
