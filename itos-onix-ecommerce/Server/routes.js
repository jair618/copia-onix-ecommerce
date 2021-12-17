
const { json } = require('express');
const express = require('express');
const routes = express.Router();
const request = require("request-promise");
const CONSTANTES = require('./constantes');

// routes-----------------------
routes.post('/',(req, res)=>{   
    var clientServerOptions = {
        url: CONSTANTES.url,
        body: req.body,
        json: true
    };
console.log("Entro a la ruta ")
    request.post(clientServerOptions).then((resu)=>{
        console.log("Resultado OK " + resu);
        res.send(resu);


    }).catch((error)=>{
        console.log("Error" + JSON.stringify(error))
        res.send(error);

    });
});

module.exports = routes;
