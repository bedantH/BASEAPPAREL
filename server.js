const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const email = req.body.emailInput;
    console.log(email);
    res.send("Thank You for posting that!!");
})


app.listen(4000, function () {
    console.log("The post started at port:4000");
})
