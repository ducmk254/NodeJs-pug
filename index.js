const express = require('express');
let app = express();
const port = 3001;
const reload = require('reload'); //eslint-disable-line
const arrCBNV = [{name:'Minh Đức', age: 3},{name:'Minh Tâm', age: -1},{name:'Khánh Chi', age: 8},{name:'Khánh Ngọc', age: 9}];
const arrUsers = [{username:'admin'},{username:'minhduc'},{username:'conga'}];

// Cách 1:  truyền biến arrCBNV từ index sang file pug : b1: gán thường arrCBNVs cho biến locals arrCBNV 
// chỉ thích hợp với dữ liệu dùng chung. vd dữ liệu về danh sách sản phẩm , dữ liệu về username, password không làm như thế đc vì mỗi ng có 1 dữ liệu khac nhau

// app.locals.arrCBNV = arrCBNVs; 







app.set('view engine','pug'); // khai bao view engine
app.set('views','./views');   // khai bao path cho views


app.get('/',(req,res)=>{{
    res.render('home');
}});


// Cách 2: truyền thông qua method get/post , truyền đối số thứ 2 trong res.render()
app.get('/learnPug',(req,res)=>{
    res.render('learn',{arrCBNV:arrCBNV,arrUsers}); // bên /learn sẽ có được biến arrCBNV là mảng arrCBNV
    // tên của biến arrCBNV và mảng arrCBNV giống nhau nên có thể viết gọn lại là: res.render('learn',{arrCBNV});
});

app.get('/admin',(req,res)=>{
    res.send('Wellcome to admin page');
})

//Reload code here
// const server = require('http').createServer(app);
// reload(app).then(()=>{
//     server.listen(app.get('port'),()=>{
//         console.log('Server started with port '+ app.get('port') +'...');
//     });
// });

reload(app);
app.listen(port,()=>console.log('Server is started with :' + port + ' port'));
