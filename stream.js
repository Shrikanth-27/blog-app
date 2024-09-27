const http=require('http');
const fs=require('fs');
const lo=require('lodash');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);

    const n=lo.random(0,20);
    console.log(n);

    const greet=lo.once(()=>{
        console.log('hrllo');
    });
    greet();

    //set header content type
    res.setHeader('Content-Type','text/html');
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>hello-ninjas</p>');
    // res.write('<p>hello</p>');

    //set the path of the url
    let path='./views/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-me':
            res.statusCode=301;
            res.setHeader('Location','/about');
            break;
        default:
            path+='404.html';
            res.statusCode=404;
            break;
    }
    
    //send an html file to page
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            //res.write(data);
            res.end(data);
        }
    });
    

    
})
server.listen(3000,'localhost',()=>{
    console.log('listing on port 3000');
})