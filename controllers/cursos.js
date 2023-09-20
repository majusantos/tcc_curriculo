const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarCursos(request, response){
        try {
            return response.status(200).json({confirma: 'Listar Cursos'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarCursos(request, response){
        try {
            return response.status(200).json({confirma: 'Cadastrar Cursos'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCursos(request, response){
        try {
            return response.status(200).json({confirma: 'Editar Cursos'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarCursos(request, response){
        try {
            return response.status(200).json({confirma: 'Apagar Cursos'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};