const express = require("express");
const route_foto = express.Router();
const data = require("../../database/config.js");

route_foto.post("/cadastrar",(req,res)=>{
    data.query("insert into fotos set ?", req.body,(error,result)=>{
        if(error){
            return res.status(500).send({msg:"Erro ao tentar cadastrar"});
        }
        res.status(201).send({msg:"Ok",payload:result});
    });
});

module.exports = route_foto;
