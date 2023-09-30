const EditorialesModel = require('../../models/editoriales.model');

exports.guardarEditorial = async (datos) => {
  try {
    const editorialGuardar = await new EditorialesModel(datos).save();
    if (editorialGuardar) {
      return {
        respuesta: true,
        editorial: editorialGuardar,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo registrar la editorial',
      };
    }
  } catch (err) {
    return err;
  }
};


exports.buscarEditorial = async (_filtro, _opciones) => {
  try {
    const buscarEditorial = await EditorialesModel.find(_filtro, _opciones);
    if (buscarEditorial) {
      return {
        respuesta: true,
        editorial: buscarEditorial,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo encontrar la editorial',
      };
    }
  } catch (err) {
    return err;
  }
};


exports.eliminarEditorial = async (dato) => {
  try {
    const eliminarEditorial = await EditorialesModel.findOneAndDelete(dato);
    if (eliminarEditorial) {
      return {
        respuesta: true,
        editorial: eliminarEditorial,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'no se encontro el registro',
      };
    }
  } catch (err) {
    return err;
  }
};

exports.actualizarEditorial = async (id, datos) => {
  try {
    const actualizarEditorial = await EditorialesModel.findByIdAndUpdate(id, datos);
    if (actualizarEditorial) {
      return {
        respuesta: false,
        mensaje: 'no se logro actualizar la editorial',
      };
    } else {
      return {
        respuesta: true,
        editorial: actualizarEditorial,
      };
    }
  } catch (err) {
    return err;
  }
};
