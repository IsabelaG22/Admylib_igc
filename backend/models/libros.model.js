const mongoose = require('../config/database');
const {Schema} = mongoose;

const LibrosSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  titulo: {
    type: String,
    required: [true, 'Ingrese el título del libro'],
    maxLength: 200,
  },
  autor: {
    type: Schema.ObjectId,
    ref: 'autores',
    required: [true, 'Referencia el autor del libro'],
  },
  editorial: {
    type: Schema.ObjectId,
    ref: 'editoriales',
    required: [true, 'Referencia a la editorial del libro'],
  },
  materias: {
    type: Array,
    required: [true, 'Ingrese un nombre de materia para asignar al libro'],
  },
  fechaPublicacion: {
    type: Date,
    required: [true, 'Ingrese la fecha en que se publicó el libro'],
  },
  copiasDisponibles: {
    type: Number,
    required: [true, 'Ingrese las copias del libro disponibles'],
  },
  idioma: {
    type: Schema.ObjectId,
    ref: 'idiomas',
    required: [true, 'Referencia al idioma en que está el libro'],
  },
  estado: {
    type: String,
    require: [true, 'Debes agregar el estado del libro'],
    default: 'libre',
  },
});

const libros = mongoose.model('libros', LibrosSchema);
module.exports = libros;
