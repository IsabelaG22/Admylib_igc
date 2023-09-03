const mongoose = require('../config/database');

const SociosSchema = new mongoose.Schema({
    documento: {
        type: Number,
        required: [true, 'Ingresar el documento es obligatorio'],
        unique: [true, 'Este documento ya está registrado'],
    },
    nombre:{
        type: String,
        maxlength: 100,
        required: [true, 'Debe ingresar el nombre completo']
    },
    telefono:{
        type: Number,
        required: true,
    },
    direccion:{
        type: String,
        required: true,
    },
    reservas: [
        {
            type: Schema.Types.ObjectId,
             ref: 'reservas'
            }
        ],
    prestamos: [
        {
            type: Schema.Types.ObjectId,
             ref: 'prestamos'
            }
        ],
    multas: [
        {
            type: Schema.Types.ObjectId,
            ref: 'multas'
        }
    ]
});

const socios = mongoose.model('socios', SociosSchema);
module.exports = socios;