const Blog = require('../models/blog')
module.exports = {
    index,
    newBlog
}

function index(req, res){ //router object that we are going to export
    // res.send('Hello World');
    Blog.find({}, function(err, blogs){
        // if(err) res.render('error')
        if(err) {
            console.log(err); //don't leave it there and push to production
            res.redirect('/');
        }
        res.render('blogs/index', {blogs}) //using template
    })
}

//create a new blog post

//stub up function
//need to call a mongoose model method responsible for creating documents
//handle the callback function that comes from the model method
//res.redirect('/blogs') by convention to the index page



function newBlog(req, res){
    Blog.create(req.body, function(err, blog){
        // res.redirect('/blogs');
        res.json(blog);
    })
}