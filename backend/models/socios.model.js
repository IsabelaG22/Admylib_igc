const mongoose = require('../config/database');
const SociosSchema = new mongoose.Schema({
  documento: {
    type: Number,
    required: [true, 'Ingresar el documento es obligatorio'],
    unique: [true, 'Este documento ya está registrado'],
  },
  nombre: {
    type: String,
    maxlength: 100,
    required: [true, 'Debe ingresar el nombre completo'],
  },
  telefono: {
    type: Number,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  reservas: {
    type: String,
    maxlength: 100,
    required: [true, 'Debe ingresar la reserva'],
  },
  prestamos: {
    type: String,
    maxlength: 100,
    required: [true, 'Debe ingresar el prestamo'],
  },
  multas: {
    type: String,
    maxlength: 100,
    required: [true, 'Debe ingresar multas'],
  },
});

const socios = mongoose.model('socios', SociosSchema);
module.exports = socios;
