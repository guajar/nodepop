'use strict';

const mongoose = require('mongoose');

// Definimos el esquema
const anuncioSchema = mongoose.Schema({
   nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});



// Creamos el modelo
let Anuncio = mongoose.model('Anuncio', anuncioSchema);