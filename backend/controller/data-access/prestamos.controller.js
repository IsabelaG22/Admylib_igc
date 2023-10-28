const PrestamosModel = require('../../models/prestamos.model');

// exports.guardarPrestamo = async (prestamoUnido) => {
//   try {
//     const prestamoUnido = await PrestamosModel.aggregate([
//       {
//         $lookup: {
//           from: 'bibliotecologos',
//           localField: 'idBibliotecologo',
//           foreignField: '_id',
//           as: 'bibliotecologo',
//         },
//       },
//       {
//         $lookup: {
//           from: 'usuarios',
//           localField: 'idUsuario',
//           foreignField: '_id',
//           as: 'usuario',
//         },
//       },
//       {
//         $lookup: {
//           from: 'libros',
//           localField: 'idLibro',
//           foreignField: '_id',
//           as: 'libro',
//         },
//       },
//       {
//         $lookup: {
//           from: 'multas',
//           localField: 'idMulta',
//           foreignField: '_id',
//           as: 'multa',
//         },
//       },
//     ]);

//     if (prestamoUnido) {
//       const prestamoGuardar = await new PrestamosModel(prestamoUnido[0]).save();
//       if (prestamoGuardar) {
//         return {
//           respuesta: true,
//           Prestamo: prestamoGuardar,
//         };
//       } else {
//         return {
//           respuesta: false,
//           mensaje: 'No se pudo registrar el préstamo',
//         };
//       }
//     } else {
//       return {
//         respuesta: false,
//         mensaje: 'No se pudo unir la información necesaria para el préstamo',
//       };
//     }
//   } catch (err) {
//     return err;
//   }
// };


exports.guardarPrestamo = async (datos) => {
  try {
    const prestamoGuardar = await new PrestamosModel(datos).save();
    if (prestamoGuardar) {
      return {
        respuesta: true,
        Prestamo: prestamoGuardar,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo registrar el prestamo',
      };
    }
  } catch (err) {
    return err;
  }
};


exports.buscarPrestamos = async () => {
  try {
    const buscarPrestamos = await PrestamosModel.find();
    if (buscarPrestamos) {
      return buscarPrestamos;
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo encontrar los prestamos',
      };
    }
  } catch (err) {
    return err;
  }
};


exports.verPrestamoById = async (id) => {
  try {
    const prestamo = await PrestamosModel.findOne(id).populate('idUsuario');
    if (prestamo) {
      return prestamo;
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo encontrar el prestamo',
      };
    }
  } catch (err) {
    return err;
  }
};

exports.eliminarPrestamo = async (dato) => {
  try {
    const eliminarPrestamo = await PrestamosModel.findOneAndDelete(dato);
    if (eliminarPrestamo) {
      return {
        respuesta: true,
        Prestamo: eliminarPrestamo,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'no se encontro el prestamo',
      };
    }
  } catch (err) {
    return err;
  }
};

exports.actualizarPrestamo = async (id, datos) => {
  try {
    const actualizarPrestamo = await PrestamosModel.findByIdAndUpdate(id, datos);
    if (actualizarPrestamo) {
      return {
        respuesta: false,
        mensaje: 'no se logro actualizar el prestamo',
      };
    } else {
      return {
        respuesta: true,
        Prestamo: actualizarPrestamo,
      };
    }
  } catch (err) {
    return err;
  }
};
