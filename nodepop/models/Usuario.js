/**
 * Created by Jose on 05/04/2017.
 */

'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// Definimos el esquema
const usuarioSchema = mongoose.Schema({
    nombre: String,
    email: { type: String, required: true, unique: true },
    pass: String
});

// Método para guardar usuario
usuarioSchema.pre('save', function(next) {
    let user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('pass')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.pass, salt, function (err, hash) {
            if (err) return next(err);
    console.log(user.pass);
            // set the hashed password back on our user document
            user.pass = hash;
            next();
        });
    });
});

// Método para comparar la password
usuarioSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.pass, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// Creamos el modelo
let Usuario = mongoose.model('Usuario', usuarioSchema);