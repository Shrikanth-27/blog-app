const express=require('express');

const app=express();

app.set('view engine','ejs');

app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
})
// app.use((req,res)=>{
//     res.sendFile('./views/404.html',{root:__dirname});
// })
//we should give the root element as the directory name to make sure 
app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname});

})
//redirect the user to 404
app.get('/about-us',(res,req)=>{
    res.redirect('./views/about.html');
});
app.use((req,res)=>{
    res.sendFile('./views/404.html',{root:__dirname});
});