const express = require("express");
const route_preco = express.Router();
const data = require("../../database/config.js");

route_preco.post("/cadastrar",(req,res)=>{
    data.query("insert into precos set ?", req.body,(error,result)=>{
        if(error){
            return res.status(500).send({msg:"Erro ao tentar cadastrar"});
        }
        res.status(201).send({msg:"Ok",payload:result});
    });
});
module.exports = route_preco;
