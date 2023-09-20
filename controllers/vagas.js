const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarVagas(request, response){
        try {
            return response.status(200).json({confirma: 'Listar Vagas'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarVagas(request, response){
        try {
            return response.status(200).json({confirma: 'Cadastrar Vagas'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarVagas(request, response){
        try {
            return response.status(200).json({confirma: 'Editar Vagas'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarVagas(request, response){
        try {
            return response.status(200).json({confirma: 'Apagar Vagas'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};