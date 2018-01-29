var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nytSchema = new Schema({
    headline: String,
    web_url: String,
    saved_date: Date
});

module.exports = mongoose.model('articles', nytSchema);