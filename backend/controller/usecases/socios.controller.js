const dataSocio = require('../data-access/socios.controller');
const modelSocio = require('../../models/socios.model');

// exports.buscarSocio =async (req, res)=>{
// const hola = modelSocio.dataSocio.buscar(_Id, opcions);

// opcions={
//     req.body
// }

// };

exports.guardar = async (req, res)=>{
  const datos = req.body;
  const nuevoSocios = await dataSocio.guardar(datos);
  console.log(nuevoSocios);
};

exports.index = (req, res) => {
  res.render('index');
};
