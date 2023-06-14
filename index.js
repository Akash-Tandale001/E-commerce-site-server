const express = require('express');
const cors = require('cors');
const connectDB =  require('./Config/Db');
require('dotenv').config()

const port = process.env.REACT_APP_PORT;
const app = express();
connectDB();
app.use(express.json())
app.use(cors({
    origin: process.env.REACT_APP_CLIENT_URL
  }));
app.use('/api',require('./routes/route'));

app.listen(port , ()=>{
    console.log(`Server is running on ${port} ...`);
})