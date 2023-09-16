const funcionesSocio = require('../controller/usecases/socios.controller');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/index', funcionesSocio.index);
router.post('/agregarSocio', funcionesSocio.guardar);

module.exports= router;
