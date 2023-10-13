const funcionesSocio = require('../controller/usecases/socios.controller');
const funcionesEditoriales = require('../controller/usecases/editoriales.controller');
const funcionesPrestamos = require('../controller/usecases/prestamos.controller');
const funcionesReserva = require('../controller/usecases/reservas.controller');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
router.get('/index', funcionesSocio.index);

// SOCIOS --------------------------------------------------------------------------------------------------
/**
 * @swagger
 * components:
 *  schemas:
 *     socios:
 *       type: object
 *       propieties:
 *         documento:
 *           type: string
 *           description: el documento del usuario
 *         nombre:
 *           type: string
 *           description: nombre del usuario
 *         telefono:
 *           type: string
 *           description: telefono del usuario
 *         direccion:
 *           type: string
 *           description: direccion del usuario
 *         reservas:
 *           type: string
 *           description: reserva del usuario
 *         prestamos:
 *           type: string
 *           description: prestamos del usuario
 *         multas: 
 *           type: string
 *           description: multas del usuario
 *       required:
 *         - documento
 *         - nombre
 *         - telefono
 *         - direccion
 *         - reservas
 *         - prestamos
 *         - multas
 *       example:
 *         documento: 1022385930
 *         nombre: Isabela
 *         telefono: 3127336934
 *         direccion: la huerta
 *         reservas: 1
 *         prestamos: 1
 *         multas: 0
 *
 */
/**
 * @swagger
 * /agregarSocio:
 *  post:
 *    summary: Crear un nuevo socio
 *    tags: [socios]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/socios'
 *    responses:
 *      200:
 *        description: nuevo Socio creado!
 */
router.post('/agregarSocio', funcionesSocio.guardar);
//OBTENER SOCIOS
/**
 * @swagger
 * /buscarSocio:
 *  get:
 *    summary: mostrar todos los socios
 *    tags: [socios]
 *    responses:
 *      200:
 *        description: Socios encontrados
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/socios'
 */
router.get('/buscarSocio', funcionesSocio.buscar);
//ELIMINAR SOCIO
/**
 * @swagger
 * /eliminarSocio/{id}:
 *  delete:
 *    summary: Eliminar Socio
 *    tags: [socios]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del usuario
 *    responses:
 *      200:
 *        description: Socio Eliminado
 *      400:
 *        description: No se pudo eliminar 
 */
router.delete('/eliminarSocio/:id', funcionesSocio.eliminar);
//ACTUALIZAR SOCIO
/**
 * @swagger
 * /actualizarSocio/{id}:
 *  put:
 *    summary: Actualizar Socio
 *    tags: [socios]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del usuario
 * 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/socios'
 *    responses:
 *      200:
 *        description: Socio Actualizado
 *      400:
 *        description: No se pudo Actualizar
 */
router.put('/actualizarSocio/:id', funcionesSocio.actualizar);

// EDITORIALES --------------------------------------------------------------------------------------------------
/**
 * @swagger
 * components:
 *  schemas:
 *     editoriales:
 *       type: object
 *       propieties:
 *         nombreEditorial:
 *           type: string
 *           description: el nombre de la editorial
 *         direccion:
 *           type: string
 *           description: direccion donde se encuentra
 *         telefono:
 *           type: string
 *           description: telefono de la editorial
 *       required:
 *         - nombreEditorial
 *         - telefono
 *         - direccion
 *       example:
 *         nombreEditorial: luz verde
 *         telefono: 358392012
 *         direccion: el hueco
 *
 */
/**
 * @swagger
 * /agregarEditorial:
 *  post:
 *    summary: Crear una Editorial
 *    tags: [editoriales]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/editoriales'
 *    responses:
 *      200:
 *        description: nueva editorial creada!
 */
router.post('/agregarEditorial', funcionesEditoriales.guardarEditoriaL);
//VER EDITORIALES
/**
 * @swagger
 * /buscarEditorial:
 *  get:
 *    summary: mostrar todas las editoriales
 *    tags: [editoriales]
 *    responses:
 *      200:
 *        description: editoriales encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/editoriales'
 */
router.get('/buscarEditorial', funcionesEditoriales.buscarEditorial);
//ELIMINAR EDITORIAL
/**
 * @swagger
 * /eliminarEditorial/{id}:
 *  delete:
 *    summary: Eliminar Editorial
 *    tags: [editoriales]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la editorial
 *    responses:
 *      200:
 *        description: editorial Eliminada
 *      400:
 *        description: No se pudo eliminar 
 */
router.delete('/eliminarEditorial/:id', funcionesEditoriales.eliminarEditorial);
//ACTUALIZAR EDITORIAL
/**
 * @swagger
 * /actualizarEditorial/{id}:
 *  put:
 *    summary: Actualizar Editorial
 *    tags: [editoriales]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la editorial
 * 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/editoriales'
 *    responses:
 *      200:
 *        description: editorial Actualizado
 *      400:
 *        description: No se pudo Actualizar
 */
router.put('/actualizarEditorial/:id', funcionesEditoriales.actualizarEditorial);

// PRESTAMOS --------------------------------------------------------------------------------------------------
/**
 * @swagger
 * components:
 *  schemas:
 *     prestamos:
 *       type: object
 *       propieties:
 *         fechaPrestamo:
 *           type: string
 *           description: Fecha del prestamo
 *         fechaDevolucion:
 *           type: string
 *           description: Fecha devolución
 *         idBibliotecologo:
 *           type: string
 *           description: Bibliotecologo a cargo
 *         idUsuario:
 *           type: string
 *           description: Usuario que lo solicito
 *         idLibro:
 *           type: string
 *           description: Libro prestado
 *         idMulta:
 *           type: string
 *           description: En caso de que tenga multa
 *       required:
 *         - fechaPrestamo
 *         - fechaDevolucion
 *         - idBibliotecologo
 *         - idUsuario
 *         - idLibro
 *         - idMulta
 *       example:
 *         fechaPrestamo: 2023-10-09
 *         fechaDevolucion: 2023-10-26
 *         idBibliotecologo: 12345678934
 *         idUsuario: 12345678234
 *         idLibro: 2345623456
 *         idMulta: 
 *
 */
/**
 * @swagger
 * /agregarPrestamo:
 *  post:
 *    summary: Crear un prestamo
 *    tags: [prestamos]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/prestamos'
 *    responses:
 *      200:
 *        description: nuevo prestamo creado!
 */
router.post('/agregarPrestamo', funcionesPrestamos.guardarPrestamo);
//VER PRESTAMOS
/**
 * @swagger
 * /buscarPrestamos:
 *  get:
 *    summary: mostrar todos los prestamos
 *    tags: [prestamos]
 *    responses:
 *      200:
 *        description: prestamos encontrados
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/prestamos'
 */
router.get('/buscarPrestamos', funcionesPrestamos.buscarPrestamos);
router.get('/buscarPrestamoById/:id', funcionesPrestamos.buscarPrestamoById);
//ELIMINAR PRESTAMO
/**
 * @swagger
 * /eliminarPrestamo/{id}:
 *  delete:
 *    summary: Eliminar prestamo
 *    tags: [prestamos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del prestamos
 *    responses:
 *      200:
 *        description: prestamo Eliminado
 *      400:
 *        description: No se pudo eliminar 
 */
router.delete('/eliminarPrestamo/:id', funcionesPrestamos.eliminarPrestamo);
//ACTUALIZAR PRESTAMO
/**
 * @swagger
 * /actualizarPrestamo/{id}:
 *  put:
 *    summary: Actualizar Prestamo
 *    tags: [prestamos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id del prestamo
 * 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/prestamos'
 *    responses:
 *      200:
 *        description: Prestamo Actualizado
 *      400:
 *        description: No se pudo Actualizar
 */
router.put('/actualizarPrestamo/:id', funcionesPrestamos.actualizarPrestamo);


// RESERVA  --------------------------------------------------------------------------------------------------
/**
 * @swagger
 * components:
 *  schemas:
 *     reservas:
 *       type: object
 *       propieties:
 *         fechaReserva:
 *           type: string
 *           description: Fecha del prestamo
 *         fechaRetiro:
 *           type: string
 *           description: Fecha devolución
 *         idUsuario:
 *           type: string
 *           description: Usuario que lo solicito
 *         idLibro:
 *           type: string
 *           description: Libro prestado
 *       required:
 *         - fechaReserva
 *         - fechaRetiro
 *         - idUsuario
 *         - idLibro
 *       example:
 *         fechaReserva: 2023-10-09
 *         fechaRetiro: 2023-10-26
 *         idUsuario: 12345678234
 *         idLibro: 2345623456
 *
 */
/**
 * @swagger
 * /agregarReserva:
 *  post:
 *    summary: Crear una reserva
 *    tags: [reservas]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/reservas'
 *    responses:
 *      200:
 *        description: nueva reserva creada!
 */
router.post('/agregarReserva', funcionesReserva.guardarReserva);
//VER RESERVAS
/**
 * @swagger
 * /buscarReserva:
 *  get:
 *    summary: mostrar todas las reservas
 *    tags: [reservas]
 *    responses:
 *      200:
 *        description: reservas encontradas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/reservas'
 */
router.get('/buscarReserva', funcionesReserva.buscarReservas);
router.get('/buscarReservaById/:id', funcionesReserva.buscarReservaById);
//ELIMINAR RESERVA
/**
 * @swagger
 * /eliminarReserva/{id}:
 *  delete:
 *    summary: Eliminar reserva
 *    tags: [reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la reserva
 *    responses:
 *      200:
 *        description: reserva Eliminada
 *      400:
 *        description: No se pudo eliminar 
 */
router.delete('/eliminarReserva/:id', funcionesReserva.eliminarReserva);
//ACTUALIZAR RESERVA
/**
 * @swagger
 * /actualizarReserva/{id}:
 *  put:
 *    summary: Actualizar Reserva
 *    tags: [reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: el id de la Reserva
 * 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/reservas'
 *    responses:
 *      200:
 *        description: Reserva Actualizado
 *      400:
 *        description: No se pudo Actualizar
 */
router.put('/actualizarReserva/:id', funcionesReserva.actualizarReserva);
module.exports = router;
