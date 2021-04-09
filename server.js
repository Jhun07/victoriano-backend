const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const UserRouter = require('./routes/user'); //importing routes
require('dotenv').config();



const app = express();
const port = process.env.PORT || 8080;  //sya muy maghimo ug paagi nga butangan ug location ang 500

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=> { //connecting to mongodb
   console.log('Mongodb connection established.');

})
//gamiton ang routes
app.use('/user',UserRouter);//duha ka routes ang gamiton
app.listen(port, () => {
    console.log('Server is running at port: ' + port);
});
