const Mongoose = require('../config/database');

const IdiomasSchema = new Mongoose.Schema({
  idioma: {
    type: String,
    required: [true, 'Ingresa el idioma'],
    unique: [true, 'Este idioma ya está registrado'],
  },
});

const idiomas = Mongoose.model('idiomas', IdiomasSchema);
module.exports = idiomas;
