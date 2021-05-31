const dbConfig = require('../configs/dbConfig');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//                                              Definition of Mongoose Model
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.app = require("./users.model.js")(mongoose);

module.exports = db;
