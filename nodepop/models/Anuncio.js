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

// Método estático para recuperar los anuncios paginados, y filtrados
anuncioSchema.statics.list = function (filter, start, limit, sort, cb) {
    const query = Anuncio.find(filter);
    query.skip(start);
    query.limit(limit);
    query.sort(sort);
    query.exec(cb);
};

// Método estático para recuperar todos los Tags con Promise
anuncioSchema.statics.listTags = function () {
    return new Promise(function (resolve, reject) {
        Anuncio.find().exec(function (err, result) {
            if(err){
                reject(err);
                return;
            }
            let tags = [];
            for(let i = 0; i < result.length; i++){
                for(let j = 0; j < result[i].tags.length; j++){
                    if(tags.indexOf(result[i].tags[j]) === -1) {
                        tags.push(result[i].tags[j]);
                    }
                }
            }
            resolve(tags);
        });
    });
};

// Creamos el modelo
let Anuncio = mongoose.model('Anuncio', anuncioSchema);