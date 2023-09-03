const Socios = require('../../models/socios.model');

exports.buscar = async (_filtros, _opciones) => {
  const socios = await Socios.find(_filtros, _opciones);
  return socios;
};
