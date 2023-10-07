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
        mensaje: 'No se pudo registrar al Socio',
      };
    }
  } catch (err) {
    return err;
  }
};

exports.buscar = async (_filtros, _opciones) => {
  try {
    const sociosBuscar = await SociosModel.find(_filtros, _opciones);
    if (sociosBuscar) {
      return sociosBuscar;
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo encontrar el socio',
      };
    }
  } catch (err) {
    return err;
  }
};

exports.eliminar = async (datos) => {
  try {
    const sociosEliminar = await SociosModel.findOneAndDelete(datos);
    if (sociosEliminar) {
      return {
        respuesta: true,
        Socio: sociosEliminar,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo eliminar al socio',
      };
    }
  } catch (err) {
    return err;
  }
};

exports.actualizar = async (id, datos) => {
  try {
    const sociosActualizar = await SociosModel.findOneAndUpdate(id, datos);
    if (sociosActualizar) {
      return {
        respuesta: true,
        Socio: sociosActualizar,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo actualizar al socio',
      };
    }
  } catch (err) {
    return err;
  }
};

