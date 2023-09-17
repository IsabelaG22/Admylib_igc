const dataSocio = require('../data-access/socios.controller');
const modelSocio = require('../../models/socios.model');

// exports.buscarSocio =async (req, res)=>{
// const hola = modelSocio.dataSocio.buscar(_Id, opcions);

// opcions={
//     req.body
// }

// };

exports.guardar = async (req, res) => {
  const datos = req.body;
  const buscarExistencia = await dataSocio.buscar({cedula: req.body.cedula});
  if (buscarExistencia == req.body.cedula) {
    res.status(500).json({socio: 'usuario ya existe '});
  } else {
    const nuevoSocios = await dataSocio.guardar(datos);
    res.status(200).json({socio: 'socio guardado con exito' + nuevoSocios});
  }
};

exports.buscar = async (req, res) => {
  const nombre = {nombre: req.body.nombre};
  const busquedaSocio = await dataSocio.buscar(nombre);
  res.status(200).json({socio: busquedaSocio});
};

exports.eliminar = async (req, res) => {
  const id = req.params.id;
  const eliminarSocio = await dataSocio.eliminar(id);
  res.status(200).json({socio: 'se elimino con exito ' + eliminarSocio.nombre});
};

exports.actualizar = async (req, res) => {
  const id = {_id: req.params.id};
  const actualizar = req.body;
  const actualizarSocio = await dataSocio.actualizar(id, actualizar);
  res.status(200).json({socio: 'se actualizo con exito'});
};

exports.index = (req, res) => {
  res.render('index');
};
