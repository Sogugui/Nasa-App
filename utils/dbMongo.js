require('dotenv').config();
const mongoose = require("mongoose");
//const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ho1fgd7.mongodb.net/`+
'nasa?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,ssl: true});
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));

module.exports = mongoose;
