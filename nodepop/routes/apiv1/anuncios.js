/**
 * Created by Jose on 08/04/2017.
 */

'use strict';

const express = require('express');
const router = express.Router();

// Cargamos mongoose y el modelo de Agente
const mongoose = require('mongoose');
const Anuncio = mongoose.model('Anuncio');

// JWT Authentication
// const jwtAuth = require('../../lib/jwtAuth');
// router.use(jwtAuth);

// GET -- Devuelve una lista de anuncios

router.get('/', function(req, res, next) {
    const query = Anuncio.find();

    query.exec(function (err, rows) {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, result: rows});
    });
});

module.exports = router;