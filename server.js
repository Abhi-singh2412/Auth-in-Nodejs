require('dotenv').config();
const express = require('express');
const connectToDb = require('./database/db');
const authRoutes = require('./routes/auth-routes')








const app = express();
app.use(express.json())//to parse my req body 
connectToDb();


app.use('/api/auth',authRoutes);//THIS IS MY MIDDLEWARE



const PORT = 3000;

app.listen(PORT , ()=>{
    console.log(`SERVER IS NOW LISTENING AT ${PORT}`);
});
