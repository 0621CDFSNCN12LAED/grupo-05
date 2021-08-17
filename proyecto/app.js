const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
    console.log("server activo");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/detail", (req, res) => {
    res.sendFile(path.join(__dirname, "views/productDetail.html"));
});

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "views/productCart.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});