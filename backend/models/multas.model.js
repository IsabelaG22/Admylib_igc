const mongoose = require('../config/database')

const MultaSchema = new mongoose.Schema({
    tiempoSancion: {
        type: Date,
        required: [true, 'Debes ingresar el tiempo de la sanción']
    },
    motivo: {
        type: String,
        maxLength: 100,
        required: [true, 'Ingresa el motivo de la sanción']
    }
});

const multas = mongoose.model('multas', MultaSchema)
module.exports = multas