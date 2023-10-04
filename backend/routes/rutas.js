const funcionesSocio = require('../controller/usecases/socios.controller');
const funcionesEditoriales = require('../controller/usecases/editoriales.controller');
const funcionesPrestamos = require('../controller/usecases/prestamos.controller');
const funcionesReserva = require('../controller/usecases/reservas.controller');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

//SOCIOS
router.get('/index', funcionesSocio.index);
router.post('/agregarSocio', funcionesSocio.guardar);
router.get('/buscarSocio', funcionesSocio.buscar);
router.get('/eliminarSocio/:id', funcionesSocio.eliminar);
router.post('/actualizarSocio/:id', funcionesSocio.actualizar);

//EDITORIALES
router.post('/agregarEditorial', funcionesEditoriales.guardarEditoriaL);
router.get('/buscarEditorial', funcionesEditoriales.buscarEditorial);
router.get('/eliminarEditorial/:id', funcionesEditoriales.eliminarEditorial);
router.post('/actualizarEditorial/:id', funcionesEditoriales.actualizarEditorial);

//PRESTAMOS
router.post('/agregarPrestamo', funcionesPrestamos.guardarPrestamo);
router.get('/buscarPrestamos', funcionesPrestamos.buscarPrestamos);
router.get('/buscarPrestamoById/:id', funcionesPrestamos.buscarPrestamoById);
router.get('/eliminarPrestamo/:id', funcionesPrestamos.eliminarPrestamo);
router.post('/actualizarPrestamo/:id', funcionesPrestamos.actualizarPrestamo);


//RESERVA

router.post('/agregarReserva', funcionesReserva.guardarReserva);
router.get('/buscarReserva', funcionesReserva.buscarReservas);
router.get('/buscarReservaById/:id', funcionesReserva.buscarReservaById);
router.get('/eliminarReserva/:id', funcionesReserva.eliminarReserva);
router.post('/actualizarReserva/:id', funcionesReserva.actualizarReserva);
module.exports= router;
