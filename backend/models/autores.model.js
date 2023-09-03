const mongoose = require('../config/database');

const AutoresSchema = new mongoose.Schema({
    nombreCompleto:{
        type:String,
        maxlength:100,
        required:[true, 'El nombre de autor es obligatorio']
    },
    fechaNacimiento:{
        typo:Date,
        required:[true, 'Ingresar fecha de nacimiento del autor'],
    },
    fechaDeceso:{
        typo:Date,
    },
});

const autores = mongoose.model('autores', AutoresSchema);
module.exports = autores;