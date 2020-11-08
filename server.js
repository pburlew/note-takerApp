// Dependencies

var express = require("express");
var path = require("path");
var fs = require("fs");

//express 

var app = express();
var PORT = process.env.PORT || 8080

//tell express where to get the data from
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

//server listening check +print confirmation
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


require("./routes/html-routes")(app);
require("./routes/api-routes")(app)