const mongoose = require("mongoose");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@cluster0.zvpg9r4.mongodb.net/CRUD`
);

let db = mongoose.connection;

module.exports = db;
