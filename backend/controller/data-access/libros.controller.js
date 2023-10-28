const Libros = require('../../models/libros.model');

exports.createLibros = async (librosdata) => {
  return await new Libros(librosdata).save();
};

exports.buscarLibro = async (filter) => {
  try {
    const buscarLibro = await Libros.find(filter);
    if (buscarLibro) {
      return {
        respuesta: true,

        Libros: buscarLibro,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'nose econtro ningun libro',
      };
    }
  } catch (err) {
    return {
      respuesta: false,
      error: err,
    };
  }
};

exports.updatelibros = async (id, data) => {
  try {
    const updatelibros = await Libros.findOneAndUpdate(id, data);
    if (updatelibros) {
      return {
        respuesta: true,

        Libros: updatelibros,
      };
    } else {
      return {
        respuesta: false,

        mensaje: 'nose realizo la actualizacion',
      };
    }
  } catch (error) {
    return {
      respuesta: false,
      error: error,
    };
  }
};

exports.eliminarLibro = async (id, data) => {
  try {
    const eliminarLibro = await Libros.deleteOne(id, data);
    if (eliminarLibro) {
      return {
        respuesta: true,

        Libros: eliminarLibro,
      };
    } else {
      return {
        respuesta: false,

        mensaje: 'no se elimino el libro',
      };
    }
  } catch (error) {
    return {
      respuesta: false,
      error: error,
    };
  }
};
