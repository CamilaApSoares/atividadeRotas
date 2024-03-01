const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req, res) {
    console.log("/")
})

app.get("/Cadastrar", function(req, res){
    console.log("/produtos/item/quantidade")
})

app.get("/produtos/:item/:quantidade", function(req,res){
    console.log("O produto é" + req.params.item, "A quantidade é" + req.params.quantidade)

})

app.get("/contato", function(req,res){
    console.log("O contato é" + req.params.contato)

})