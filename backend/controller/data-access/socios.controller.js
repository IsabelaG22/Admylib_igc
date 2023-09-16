const Socios = require('../../models/socios.model');


exports.guardar = async (datos)=>{
  const sociosGuardar = await new Socios(datos).save();
  return sociosGuardar;
};

exports.buscar = async (_filtros, _opciones) => {
  const sociosBuscar = await Socios.find(_filtros, _opciones);
  return sociosBuscar;
};

exports.eliminar = async (datos)=>{
  const sociosEliminar = await Socios.findOneAndDelete(datos);
  return sociosEliminar;
};

exports.actualizar = async (id, datos)=>{
  const sociosActualizar = await Socios.findOneAndUpdate(id, datos);
  return sociosActualizar;
};

