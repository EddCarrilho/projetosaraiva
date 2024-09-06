const express = require("express");
const route_carrinho = express.Router();
const data = require("../../database/config.js");

route_carrinho.get("/listar",(req,res)=>{
    data.query("select * from carrinho",(error, dados)=>{
        if(error){
            return res.status(500).send({msg:"Erro ao carregar dados"});
        }
        res.status(200).send({msg:"Ok",payload:dados});
    })
})

route_carrinho.get("/listar/:id",(req,res)=>{
    data.query("SELECT foto.foto1,titulos.nometitulo,titulos.autor,carrinho.quantidade,preco.precoatual,titulos.idtitulo,total FROM saraivalivrodb.fotos foto INNER JOIN saraivalivrodb.titulos titulos on foto.idfotos=titulos.idfoto INNER JOIN saraivacarrinhodb.carrinho carrinho on titulos.idtitulo=carrinho.idproduto INNER JOIN saraivalivrodb.precos preco on preco.idpreco = titulos.idpreco WHERE carrinho.idusuario=1;", req.params.id, (error, dados)=>{
        if(error){
            return res.status(500).send({msg:"Erro ao carregar dados"});
        }
        res.status(200).send({msg:"Ok",payload:dados});
    })
})

route_carrinho.post("/inserir",(req,res)=>{
    const dados = req.body
    data.query("insert into carrinho set ?", req.body, (error, dados)=>{
        if(error){
            return res.status(500).send({msg:"Não foi possível colocar no carrinho"});
        }
        res.status(200).send({msg:"Ok",payload:dados});
    })
})
module.exports = route_carrinho