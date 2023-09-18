require('dotenv').config();
const express = require('express');
const Routes = require('./routes/Routes')
const mongoose = require('mongoose');
const cors = require('cors');

const app=express();

app.use(express.json());
app.use(cors({
    origin:'http://127.0.0.1:5173'
}))
mongoose.connect(process.env.MONGO_URL)


app.use(Routes);
let port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})