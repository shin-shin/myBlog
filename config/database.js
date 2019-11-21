const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myblog',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
});

const db = mongoose.connection;
db.on('connected', function(){
    console.log(`DB connection successfull on host ${db.host} on port ${db.port}`);
});

db.on('error', function(err){
    console.log(`MongoDB encountered an error: ${err}`);
})