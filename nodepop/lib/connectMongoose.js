'use strict';

const mongoose = require('mongoose');
const conn = mongoose.connection;

// Le decimos a Mongoose que librería de Promesas va a usar
mongoose.Promise = global.Promise;

// Subscribirnos a posibles errores de conexión
conn.on('error', function (err) {
    console.log('Error de conexión:', err);
    process.exit(1);
});

// once -- La 1ª vez que se conecta
conn.once('open', function () {
    console.log('Conectado a MongoDB')
});

// Realizar la conexión
mongoose.connect('mongodb://localhost:27017/nodepop');