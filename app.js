var express = require("express");
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.get("/green/route1", async (req, res, next)=>{
	res.status(200).json({'App': 'Green App', 'Route': 'Route 1'});
});

app.get("/green/route2", async (req, res, next)=>{
	res.status(200).json({'App': 'Green App', 'Route': 'Route 2'});
});
