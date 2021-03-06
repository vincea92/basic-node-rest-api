'use strict';

var express = require("express");
var app = express();
var routes = require("./routes");

var jsonParser = require("body-parser").json;
var logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());

app.use("/", routes);

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express server is listening on port", port);
});
