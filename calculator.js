const express = require("express");

const app = express();
app.use(express.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", function(req, res){
    res.send("This is going to be a calculator app");
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname +  "/bmiCalculator.html");
});


app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);

    res.send("Thanks for posting that.");
});


app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    height = height / 100;

    var result = ((weight) / (height * height)).toFixed(1);

    res.send("Your Body Mass Index is " + result);
});



app.listen(3000, function(){
    console.log("Server started on port 3000...");
});