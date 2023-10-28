const mongoose = require('../config/database');
const {Schema} = mongoose;


const PrestamoSchema = new mongoose.Schema({
  fechaPrestamo: {
    type: Date,
    required: [true, 'Ingresa fecha inicio del prestamo'],
  },
  fechaDevolucion: {
    type: Date,
    required: [true, 'Ingresa fecha devolución prestamo'],
  },
  idBibliotecologo: {
    type: Schema.Types.ObjectId,
    ref: 'bibliotecologos',
    required: [true, 'Ingresa Bibliotecologo encargado del prestamo'],
  },
  idUsuario: {
    type: Schema.Types.ObjectId,
    ref: 'usuarios',
    required: [true, 'Ingresa Usuario encargado del prestamo'],
  },
  idLibro: {
    type: Schema.Types.ObjectId,
    ref: 'libros',
    required: [true, 'Ingresa id libro del prestamo'],
  },
});

const Prestamos = mongoose.model('prestamos', PrestamoSchema);
module.exports = Prestamos;
