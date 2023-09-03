const mongoose = require('../config/database');

const IdiomasSchema = mongoose.Schema({
    idioma: {
        type: String,
        required: [true, 'Ingresa el idioma'],
        unique: [true, 'Este idioma ya está registrado'],
    }
});

const idiomas = mongoose.model('idomas', IdiomasSchema);
module.exports = idiomas;