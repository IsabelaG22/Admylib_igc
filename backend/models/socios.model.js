const mongoose = require('../config/database');
const {Schema} = mongoose;

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
    type: Schema.types.ObjectId,
    ref: 'reservas',
    maxlength: 100,
    required: [true, 'Debe ingresar la reserva'],
  },
  prestamos: {
    type: Schema.types.ObjectId,
    ref: 'prestamos',
    maxlength: 100,
    required: [true, 'Debe ingresar el prestamo'],
  },
  multas: {
    type: Schema.types.ObjectId,
    ref: 'multas',
    maxlength: 100,
    required: [true, 'Debe ingresar multas'],
  },
});

const socios = mongoose.model('socios', SociosSchema);
module.exports = socios;
