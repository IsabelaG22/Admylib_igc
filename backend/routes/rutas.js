const funcionesSocio = require('../controller/usecases/usuarios.controller');
const funcionesEditoriales = require('../controller/usecases/editoriales.controller');
const funcionesPrestamos = require('../controller/usecases/prestamos.controller');
const funcionesReserva = require('../controller/usecases/reservas.controller');
const libros = require('../controller/usecases/libros.controller');

const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
// FORMULARIOS -----------------------------------------------------------------------------------------
router.get('/index', funcionesSocio.index);
router.get('/fEditoriales', funcionesSocio.formularioEditoriales);
router.get('/fPrestamos', funcionesSocio.formularioPrestamos);
router.get('/fReservas', funcionesSocio.formularioReservas);
router.get('/fUsuarios', funcionesSocio.formularioUsuarios);


// SOCIOS --------------------------------------------------------------------------------------------------
router.post('/agregarSocio', funcionesSocio.guardar);
router.get('/buscarSocio', funcionesSocio.buscar);
router.delete('/eliminarSocio/:id', funcionesSocio.eliminar);
router.put('/actualizarSocio/:id', funcionesSocio.actualizar);

// EDITORIALES --------------------------------------------------------------------------------------------------

router.post('/agregarEditorial', funcionesEditoriales.guardarEditoriaL);
router.get('/buscarEditorial', funcionesEditoriales.buscarEditorial);
router.delete('/eliminarEditorial/:id', funcionesEditoriales.eliminarEditorial);
router.put('/actualizarEditorial/:id', funcionesEditoriales.actualizarEditorial);

// PRESTAMOS --------------------------------------------------------------------------------------------------

router.post('/agregarPrestamo', funcionesPrestamos.guardarPrestamo);
router.get('/buscarPrestamos', funcionesPrestamos.buscarPrestamos);
router.get('/buscarPrestamoById/:id', funcionesPrestamos.buscarPrestamoById);
router.delete('/eliminarPrestamo/:id', funcionesPrestamos.eliminarPrestamo);
router.put('/actualizarPrestamo/:id', funcionesPrestamos.actualizarPrestamo);


// RESERVA  --------------------------------------------------------------------------------------------------

router.post('/agregarReserva', funcionesReserva.guardarReserva);
router.get('/buscarReserva', funcionesReserva.buscarReservas);
router.get('/buscarReservaById/:id', funcionesReserva.buscarReservaById);
router.delete('/eliminarReserva/:id', funcionesReserva.eliminarReserva);


// MODULO LIBROS------------------------------------------------------------------------------------------------------


router.post('/registrarlibro', libros.creaLibros);
router.get('/listarLibro', libros.find);
router.put('/actualizarLibro/:id', libros.update);
router.put('/actualizarReserva/:id', funcionesReserva.actualizarReserva);
module.exports = router;

