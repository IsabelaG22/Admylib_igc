const mongoose = require('../config/database');

const AutoresSchema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    maxlength: 100,
    required: [true, 'El nombre de autor es obligatorio'],
  },
  fechaNacimiento: {
    type: Date,
    required: [true, 'Ingresar fecha de nacimiento del autor'],
  },
  fechaDeceso: {
    type: Date,
    required: [true, 'Ingresar fecha de nacimiento del autor'],

  },
});

const autores = mongoose.model('autores', AutoresSchema);
module.exports = autores;
