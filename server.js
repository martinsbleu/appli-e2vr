const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./app/models');

//                                      Creation of express app
const app = express();

let corsOptions = {
    origin: "http://localhost:8082"
}

app.use(cors(corsOptions));
//                                      Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//                                      Parse requests of content-type - application/json
app.use(bodyParser.json())

//                                      Connection to database
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true // Suppress [MONGODB DRIVER deprecated] Warning,
        // Doesn't need this for MongoDB version 5.7.1
}).then(() => {
    console.log("Connection Successful");
}).catch(err => {
    console.log('Sorry, connection failed. ', err);
    process.exit();
});


//                                      Simple route
app.get('/', (req, res) => {
    res.json({ "message": "E2VR Test" });
});
//                                      Require Users routes
require('./app/routes/users.routes.js')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Hey! I am listening on port 8080 :D ");
});