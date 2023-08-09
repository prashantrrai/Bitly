const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/bitly'

mongoose.connect(url).then((result) => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.log("Error in COnnecting Mongodb", err);
});