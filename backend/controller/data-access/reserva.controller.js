const ReservaModel = require('../../models/reservas.model');

exports.guardarReserva = async (datos) => {
  try {
    const reservaGuardar = await new ReservaModel(datos).save();
    if (reservaGuardar) {
      return {
        respuesta: true,
        reserva: reservaGuardar,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo registrar la reserva',
      };
    }
  } catch (err) {
    return err;
  }
};


exports.buscarReservas = async () => {
  try {
    const buscarReservas = await ReservaModel.find();
    if (buscarReservas) {
      return {
        respuesta: true,
        Reserva: buscarReservas,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo encontrar las reservas',
      };
    }
  } catch (err) {
    return err;
  }
};

exports.verReservaById = async (id) => {
  try {
    const ReservaById = await ReservaModel.findOne(id);
    if (ReservaById) {
      return {
        respuesta: true,
        Reserva: ReservaById,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'No se pudo encontrar la Reserva',
      };
    }
  } catch (err) {
    return err;
  }
};

exports.eliminarReserva = async (dato) => {
  try {
    const eliminarReserva = await ReservaModel.findOneAndDelete(dato);
    if (eliminarReserva) {
      return {
        respuesta: true,
        Reserva: eliminarReserva,
      };
    } else {
      return {
        respuesta: false,
        mensaje: 'no se encontro la Reserva',
      };
    }
  } catch (err) {
    return err;
  }
};

exports.actualizarReserva = async (id, datos) => {
  try {
    const actualizarReserva = await ReservaModel.findByIdAndUpdate(id, datos);
    if (actualizarReserva) {
      return {
        respuesta: false,
        mensaje: 'no se logro actualizar el Reserva',
      };
    } else {
      return {
        respuesta: true,
        Reserva: actualizarReserva,
      };
    }
  } catch (err) {
    return err;
  }
};
