const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, DELETE, OPTIONS, PUT, PATCH"
	);
	next();
});

app.use("/second", (req, res, next) => {
  res.send("second");
  next();
});

app.use("/posts", (req, res, next) => {

  res.status(200).json({
		message: "Succesfully",
		// ...
  });
});
module.exports = app;
