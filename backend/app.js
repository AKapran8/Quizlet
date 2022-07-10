const express = require("express");
const bodyPerser = require("body-parser");
const app = express();

app.use(bodyPerser.json());

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

// app.post('/posts/add', (req, res, next) => {
// 	const post = req.body;
// 	res.status(201).json({
// 		message: 'Post added sucessfully'
// 	});
// });

// app.get("/posts", (req, res, next) => {

//   res.status(200).json({
// 		message: "Successfully",
// 		// ...
//   });
// });
module.exports = app;
