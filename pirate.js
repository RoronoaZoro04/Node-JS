const mongoose = require('mongoose')

const pirateSchema = new mongoose.Schema({
    name:String,
    Bounty:Number,
    skills:String,
    Profession:String
})
module.exports = mongoose.model('node-test',pirateSchema);