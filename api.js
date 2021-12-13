const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const db = require("./models");

const PORT = process.env.port || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ezpos";


mongoose.connect(MONGODB_URI);
