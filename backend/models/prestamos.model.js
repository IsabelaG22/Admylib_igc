const mongoose = require('../config/database');
const { Schema } = mongoose;


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
    type: [{
      type: Schema.ObjectId,
      ref: 'bibliotecologos',
    }],
    required: [true, 'Ingresa Bibliotecologo encargado del prestamo'],
  },

  idUsuario: {
    type: Schema.ObjectId,
    ref: 'socios',
    required: [true, 'Ingresa Usuario encargado del prestamo'],
  },
  idLibro: {
    type: Schema.ObjectId,
    ref: 'libros',
    required: [true, 'Ingresa id libro del prestamo'],
  },
  idMulta: {
    type: Schema.ObjectId, // identificador unico de un documento
    ref: 'multas', // referencia base de datos
  },
});

const Prestamos = mongoose.model('prestamos', PrestamoSchema);
module.exports = Prestamos;
