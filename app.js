const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/",function(req, res){
    res.render("index")
})

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }).then(function(){
        console.log("Agendamento cadastrado com sucesso!")
    }).catch(function(erro){
        console.log("Erro: Agendamento não cadastrado!" + erro)
    })

    res.render("index")
})


app.get("/consultar", function(req, res){
    post.findAll().then(function(post){
        res.render("consultar", {post:post})
    }).catch(function(erro){
        console.log("Erro: Nenhum agendamento encontrado!" + erro)
    })
})