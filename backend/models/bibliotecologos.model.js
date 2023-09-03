const mongoose = require('../config/database')

const BibliotecologoSchema = new mongoose.Schema({
    documento: {
        type: Number,
        require: [true, 'Debe ingresar el documento'],
        unique: [true, 'Este documento ya se encuentra registrado'],
    },
    nombre: {
        type: String,
        require: [true, 'Ingrese el nombre completo'],
        maxLength: 100,
    },
    correo:{
        type: String,
        require: [true, 'Ingresa un correo electronico'],
        unique: [true, 'Este correo ya existe'],
    },
    password:{
        type: String,
        require: [true, 'Debes ingresar una contraseña segura'],
    },
    horarioEntrada: {
        type: Date,  
        require:[true, 'Ingresa la hora de entrada del empleado'],
    },
    horarioSalida: {
        type: Date,
        require:[true, 'Ingresa la hora de salida del empleado'],
    }
});

const bibliotecologos = mongoose.model('bibliotecologos', BibliotecologoSchema)
module.exports= bibliotecologos