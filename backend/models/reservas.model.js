const mongoose = require('../config/database');
const {Schema} = mongoose;


const ReservaSchema = new mongoose.Schema({
  fechaReserva: {
    type: Date,
    required: [true, 'Ingresa fecha que se realizo la reserva'],
  },
  fechaRetiro: {
    type: Date,
    required: [true, 'Ingresa fecha que va reclamar el libro '],
  },
  idUsuario: {
    type: Schema.types.ObjectId,
    required: [true, 'Ingrese usuario responsable de la reserva'],
  },
  idLibro: {
    type: Schema.types.ObjectId,
    required: [true, 'Ingrese id libro prestado'],
  },
});

const reservas = mongoose.model('reservas', ReservaSchema);
module.exports = reservas;
