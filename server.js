// @github_bosheca
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//  mongoose connect
mongoose.connect('mongodb://localhost/user', { useNewUrlParser : true , useUnifiedTopology: true })
.then( res => console.log('mongoDb is connected'))
.catch(err => console.log(err))



//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/users', require('./route/user'))

app.listen(2550 , () => console.log(('server is running'))
)