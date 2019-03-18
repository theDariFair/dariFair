var express = require("express");
var app = express();
var PORT = process.env.PORT || 8888;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));




app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
