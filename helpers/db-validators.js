const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async (rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
    }
}

const esMailValido = async (correo = '') => {
    //verificar si el correo existe 
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El Correo ${correo} ya esta registrado en la base de datos`)
    }
}

const existeUsuarioPorId = async (id) => {
    //verificar si el id existe 
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El Id ${id} no existe`)
    }
}

module.exports = {
    esRolValido,
    esMailValido,
    existeUsuarioPorId
}