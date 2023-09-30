const SociosModel = require('../../models/socios.model');


exports.guardar = async (datos) => {
  try {
    const sociosGuardar = await new SociosModel(datos).save();
    if (sociosGuardar) {
      return {
        respuesta: true,
        socios: sociosGuardar,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo registrar al usuario',
      };
    }
  } catch (err) {
    return err;
  }
};

exports.buscar = async (_filtros, _opciones) => {
  const sociosBuscar = await SociosModel.find(_filtros, _opciones);
  return sociosBuscar;
};

exports.eliminar = async (datos) => {
  const sociosEliminar = await SociosModel.findOneAndDelete(datos);
  return sociosEliminar;
};

exports.actualizar = async (id, datos) => {
  const sociosActualizar = await SociosModel.findOneAndUpdate(id, datos);
  return sociosActualizar;
};

