const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")


app.get("/", function(req,res){
    res.render("index")
})

app.get("/consultar", function(req, res){
    res.render("consultar")
})

app.get("/atualizar", function(req, res){
    res.render("atualizar")
})


app.listen(8080, function(){
    console.log("Servidor UP!!!!")
})


app.get("/", function(req,res){
    res.send("index")
})

app.get("/atualizar", function(req,res){
    res.send("atualizar")
})

app.get("/consultar", function(req, res){
    res.send("consultar")
})


