const express = require("express")
const app = express()
const port = 3030
const path = require("path")

createPath = (filename) => path.join(__dirname,`./views/${filename}.html`);

app.use(express.static('public'))



app.get("/",(req,res) => res.sendFile(createPath("index")));

app.get("/login",(req,res) => res.sendFile(createPath("login")));

app.get("/productCart",(req,res) => res.sendFile(createPath("productCart")));

app.get("/productDetail",(req,res) => res.sendFile(createPath("productDetail")));

app.get("/register",(req,res) => res.sendFile(createPath("register")));

app.listen(port,() => console.log(`http://localhost:${port}`))

