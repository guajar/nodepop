/**
 * Created by Jose on 08/04/2017.
 */

'use strict';

const express = require('express');
const router = express.Router();
const mensajesErr = require('../../utils/customError');


// Cargamos mongoose y el modelo de Agente
const mongoose = require('mongoose');
const Anuncio = mongoose.model('Anuncio');

// JWT Authentication
const jwtAuth = require('../../lib/jwtAuth');
router.use(jwtAuth);

// GET -- Devuelve una lista de anuncios
router.get('/', function(req, res, next) {

    const nombre = req.query.nombre;
    const venta = req.query.venta;
    const tags = req.query.tags;
    let precio = req.query.precio;
    const start = parseInt(req.query.start) || 0;
    const sort = req.query.sort || null;
    const limit = parseInt(req.query.limit) || null;

    const filter = {};

    // Compruebo los parámetros de búsqueda antes de realizar la llamada
    if(nombre) {
        filter.nombre = new RegExp("^" + nombre, "i");
    }

    if(venta) {
        filter.venta = venta;
    }

    if(tags) {
        filter.tags = tags;
    }

    if(precio){
        let posicion = precio.indexOf('-');
        if(posicion === -1){
            filter.precio =  precio ;
        }else if(posicion === 0){
            precio = precio.replace('-','');
            filter.precio = { $lte: precio };
        }else if(posicion === precio.length-1){
            precio = precio.replace('-','');
            filter.precio = { $gte: precio };
        }else{
            let min = precio.substr(0, posicion);
            let max = precio.substr(posicion +1, precio.length-1);
            filter.precio = { $gte: min, $lte: max };
        }
    }

    Anuncio.list(filter, start, limit, sort, function (err, rows) {
        if(err) {
            return next(err);
        }
        res.json({success: true, result: rows});
    });
});

router.get('/tags',function (req,res) {
    const lang = req.headers["accept-language"];

    Anuncio.listTags()
        .then(function (tags) {
            res.json({
                success:true,
                tags: tags
            });
        }).catch(function () {
        res.json({
            success:false,
            error: mensajesErr['CONNECTION_FAILURE'][lang]
        })
    });
});


module.exports = router;