/**
 * Created by Jose on 09/04/2017.
 */

'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const localConfig = require('../../utils/localConfig');
const check = require('../../utils/checker');
const mensajesErr = require('../../utils/customError');

const router = express.Router();
const Usuario = mongoose.model('Usuario');


// POST -- User Sign Up
router.post('/signup', function (req, res, next) {

    const nombre = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    const lang = req.headers["accept-language"];

    if (!nombre) {
        return res.json({
            success: false,
            error: mensajesErr['NAME_REQUIRED'][lang]
        });
        return;
    }

    if (!email) {
        return res.json({
            success: false,
            error: mensajesErr['EMAIL_IS_NEEDED'][lang]
        });
        return;
    }

    if(!check.isEmail(email)){
        res.json({
            success:false,
            error: mensajesErr['INVALID_EMAIL'][lang]
        });
        return;
    }

    if (!pass) {
        return res.json({
            success: false,
            error: mensajesErr['PASSWORD_IS_NEEDED'][lang]
        });
        return;
    }

    const user = new Usuario({
        name: nombre,
        email: email,
        pass: pass
    });

    user.save(function (err, userSave) {
        if(err){
            res.json({
                success:false,
                error:  mensajesErr['ERROR_SAVING'][lang]
            });
            return;
        }
        console.log('User saved');
        res.json({success: true, user: userSave});
    });

});


// POST - Autenticación de usuarios
router.post('/authenticate', function (req, res, next) {

    // Recogemos credenciales
    const username = req.body.username;
    const password = req.body.password;
    const lang = req.headers["accept-language"];

    //Buscamos en la BD
    Usuario.findOne({email: username}).exec(function (err, user) {
        // From ERROR to SUCCESS
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.json({success: false, error: mensajesErr['USER_NOT_FOUND'][lang]});
        }

        // comprobamos la password
        user.comparePassword(password, function(err, isMatch) {
            if (err) throw err;
            if(!isMatch) {
                return res.json({success: false, error: mensajesErr['INVALID_PASSWORD'][lang]});
            }

            if(isMatch) {
                // Creamos un token
                let token = jwt.sign({ user_id: user._id}, localConfig.jwt.secret, {expiresIn: '5d'});
                res.json({success: true, token});
            }
        });


    });
});

module.exports = router;
