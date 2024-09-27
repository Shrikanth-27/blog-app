
//working with ejs
const express=require('express');
const morgan=require('morgan');
const mongoose = require('mongoose');
//const Blog=require('./modules/blog');
const blogRoutes=require('./routes/blogroutes');


const app=express();
//connect to mongodb

const dbURI='mongodb+srv://netninja:sri27@srikanth.lkpzxam.mongodb.net/?retryWrites=true&w=majority&appName=Srikanth';

mongoose.connect(dbURI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch((err) => {
    console.log('Failed to connect', err);
});


app.set('view engine','ejs');

//app.listen(3000);



// app.use((req,res,next)=>{
//     console.log('new request made');
//     console.log('host',req.hostname);
//     console.log('path',req.path);
//     console.log('method',req.method);
//     next();

// });
// app.use((req,res,next)=>{
//     console.log('new next middleware');
    
//     next();

// });
//middle ware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//coonection of data base

/*app.get('/add-blog',(req,res)=>{
    const blog=new Blog({
        title:'new blog',
        snippet:'about my blog',
        body:'more about my new blog'
    });
    blog.save()
     .then((result)=>{
        res.send(result)
     })
     .catch((err)=>{
        console.log(err);
     })

})

app.get('/all-blogs',(req,res)=>{
    Blog.find()
     .then((result)=>{
        res.send(result);
     })
     .catch((err)=>{
        console.log(err);
     })
})
app.get('/single-block',(req,res)=>{
    Blog.findById('66a52af07d41c486dcce2dea')
     .then((result)=>{
        res.send(result);
     })
     .catch((err)=>{
        console.log(err);
     })
})*/

app.get('/',(req,res)=>{
    // const blogs= [

    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ];
    // res.render('index',{title:'Home'});
    res.redirect('/blogs');
});
// app.use((req,res)=>{
//     res.sendFile('./views/404.html',{root:__dirname});
// })
//we should give the root element as the directory name to make sure 
app.get('/about1',(req,res)=>{
    res.render('about1',{title:'Home'});

})
// app.get('/blogs/create',(req,res)=>{
//     res.render('create',{title:'Blogs'});

// })
// app.get('/blogs',(req,res)=>{
//     Blog.find().sort({createdAt:-1})
//      .then((result)=>{
//         res.render('index',{title:'All Blogs',blogs:result})

//      })
//      .catch((err)=>{
//         console.log(err);
//      })

// })
//blog routes
app.use(blogRoutes);


// app.post('/blogs',(req,res)=>{
//     const blog=new Blog(req.body);
//     blog.save()
//      .then((result)=>{
//         res.redirect('/blogs');
//      })
//      .catch((err)=>{
//         console.log(err);
//      })
// })
// app.get('/blogs/:id',(req,res)=>{
//     const id=req.params.id;
//     Blog.findById(id)
//      .then(result=>{
//         res.render('details',{blog:result,title:'Blog Deatails'});
//      })
//      .catch(err=>{
//         console.log(err);
//      })
// })
// app.delete('/blogs/:id',(req,res)=>{
//     const id=req.params.id;
//     Blog.findByIdAndDelete(id)
//      .then(result=>{
//         res.json({redirect:'/blogs'});
//      })
//      .catch(err=>{
//         console.log(err);
//      });
// })
    



app.use((req,res)=>{
    res.render('4044',{title:'404'});
});