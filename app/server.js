var express = require("express");
var app = express();
var restRouter = require("./routers/rest");
var redirectRouter = require("./routers/redirect");
var indexRouter = require("./routers/index");
var mongoose = require("mongoose");
var useragent = require("express-useragent");

mongoose.connect("mongodb://user:user@ds155097.mlab.com:55097/tinyurl");

app.use("/public", express.static(__dirname + "/public"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.use(useragent.express());

app.use("/api/v1", restRouter);

app.use("/", indexRouter);

app.use("/:shortUrl", redirectRouter);

app.listen(3000);
