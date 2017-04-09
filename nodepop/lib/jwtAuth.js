/**
 * Created by Jose on 09/04/2017.
 */

'use strict';

const jwt = require('jsonwebtoken');
const localConfig = require('..//utils/localConfig');
const customError = require('../utils/customError');

// Middleware de autenticación
module.exports = function (req, res, next) {
    // Recoger el token
    const token = req.body.token || req.query.token || req.get('x-access-token');

    if (!token) {
        const err = new Error('No token provided');
        err.status = 401;
        return next(err);
    }

    jwt.verify(token, localConfig.jwt.secret, function (err, decoded) {
        if (err) {
            // Token inválido (Alguien lo ha modificado o ha expirado)
            return next(new Error('Invalid token'));
        }
        req.user_id = decoded.user_id;
        next();

    });
};