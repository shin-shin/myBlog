const express = require('express');
const app = express();
const port = 3000;

require('./config/database')

const indexRouter = require("./routes/index")
const blogsRouter = require("./routes/blogs")

app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended: false}));// !!!these two has bo be above routes!!!

// app.use('/', indexRouter) //matching the route, to bridge boutes and controllers
app.use('/', indexRouter) //matching the route, to bridge boutes and controllers
app.use('/blogs', blogsRouter) //matching the route, to bridge boutes and controllers
// app.use('/', )
//move data (like name and post) to models folder

//move routes to routes folder


app.listen(port, () => {
    console.log(`express is listening on port: ${port}`);
});



