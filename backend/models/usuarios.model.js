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
    type: Schema.ObjectId,
    ref: 'reservas',
    maxlength: 100,
    required: [true, 'Debe ingresar la reserva'],
  },
  prestamos: {
    type: Schema.ObjectId,
    ref: 'prestamos',
    maxlength: 100,
    required: [true, 'Debe ingresar el prestamo'],
  },
  multas: {
    type: Schema.ObjectId,
    ref: 'multas',
    maxlength: 100,
    required: [true, 'Debe ingresar multas'],
  },
  correoElectronico: {
    type: String,
    required: [true, 'Ingresar el correo ELetronico  es obligatorio'],
  },
  password: {
    type: String,
    required: [true, 'Ingresar una contraseña es obligatorio'],

  },
  rol: {
    type: String,
    required: [true, 'es necesario un rol'],
  },

});

const socios = mongoose.model('socios', SociosSchema);
module.exports = socios;
