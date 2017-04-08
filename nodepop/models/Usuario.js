/**
 * Created by Jose on 05/04/2017.
 */

'use strict';

const mongoose = require('mongoose');

// Definimos el esquema
const usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    pass: String
});


// Creamos el modelo
let Usuario = mongoose.model('Usuario', usuarioSchema);