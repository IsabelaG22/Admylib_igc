const funcionesSocio = require('../controller/usecases/socios.controller');
const funcionesEditoriales = require('../controller/usecases/editoriales.controller');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/index', funcionesSocio.index);
router.post('/agregarSocio', funcionesSocio.guardar);
router.get('/buscarSocio', funcionesSocio.buscar);
router.get('/eliminarSocio/:id', funcionesSocio.eliminar);
router.post('/actualizarSocio/:id', funcionesSocio.actualizar);


router.post('/agregarEditorial', funcionesEditoriales.guardarEditoriaL);
router.get('/buscarEditorial', funcionesEditoriales.buscarEditorial);
router.get('/eliminarEditorial/:id', funcionesEditoriales.eliminarEditorial);
router.post('/actualizarEditorial/:id', funcionesEditoriales.actualizarEditorial);


module.exports= router;
