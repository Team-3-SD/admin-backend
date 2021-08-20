//importamos response
const { response } = require('express');
const { validationResult } = require('express-validator')

//
const validarCampos = (req, res = response, next ) => {

    const errores = validationResult( req );

    //en caso haya errores en request
    if ( !errores.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    
    next();
}

module.exports = {
    validarCampos
}
