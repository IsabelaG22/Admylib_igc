const mongoose = require('../config/database');

const ReservaSchema = new mongoose.Schema({
  fechaReserva: {
    type: Date,
    required: [true, 'Ingresa fecha que se realizo la reserva'],
  },
  fechaRetiro: {
    type: Date,
    required: [true, 'Ingresa fecha qeu va reclamar el libro '],
  },
  idUsuario: {
    type: String,
    ref: 'socios',
    required: [true, 'Ingrese usuario responsable de la reserva'],
  },
  idLibro: {
    type: String,
    ref: 'libros',
    required: [true, 'Ingrese id libro prestado'],
  },
});

const reservas = mongoose.model('reservas', ReservaSchema);
module.exports = reservas;
