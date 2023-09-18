const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const cryptoSchema = new Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

const CryptoModel = model('Crypto', cryptoSchema);
module.exports =CryptoModel;