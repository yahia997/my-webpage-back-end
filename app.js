const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes");
const path = require("path");
const app = express();
var compression = require('compression');
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({limit: "5mb", extended: true, parameterLimit:50000}));
app.use("/articles", router);
app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("database connected successfully");
})

app.listen(port, console.log(`app is listenting on port ${port}...`));

























const uri = "mongodb+srv://yahia:gtav5532759@cluster0.c1uv8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });