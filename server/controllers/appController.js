const Crypto = require('../models/crypto')
const axios = require('axios');

const fetchData = async ()=>{
    try{
        const res= await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data= res.data;
        
        const top10data= Object.values(data).slice(0,10);
        //clear the database
        await Crypto.deleteMany();
        //fill the database with top 10 cryptodata
        await Crypto.insertMany(top10data);
    } 
    catch(err){
        console.log('Error while fetching data',err);
    }
}


module.exports.get_data= async (req,res)=>{
    fetchData();
    try{
        const data= await Crypto.find({});
        res.status(200).json(data);
    }catch(err){
        res.status(400).json(err);
    }
}