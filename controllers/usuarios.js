const {response} = require('express')

const usuariosGet = (req, res = response) => {

    const {q, nombre, apikey} = req.query;

    res.json({
        msg: 'get api - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res = response) => {

    const body = req.body;
    res.json({
        msg: 'post api - controlador',
        body
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;
        res.json({
        msg: 'put api - controlador',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch api'
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        msg: 'delete api'
    });
}

module.exports = {

    usuariosGet,
    usuariosPost, 
    usuariosPut,
    usuariosPatch,
    usuarioDelete
}