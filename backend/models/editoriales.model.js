const mongoose = require('../config/database');

const EditorialesSchema = new mongoose.Schema({
    nombreEditorial: {
        type: String,
        maxlength: 100,
        required: [true, 'Ingrese el nombre de la editorial'],
        unique: [true, 'Esta editorial ya existe']
    },
    direccion: {
        type: String,
        maxlength: 100,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    }
});

const editoriales = mongoose.model('editoriales', EditorialesSchema);
module.exports = editoriales;