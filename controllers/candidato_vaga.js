const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarCandidatoVaga(request, response){
        try {
            return response.status(200).json({confirma: 'Listar Candidato Vaga'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarCandidatoVaga(request, response){
        try {
            return response.status(200).json({confirma: 'Casdastrar Candidato Vaga'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCandidatoVaga(request, response){
        try {
            return response.status(200).json({confirma: 'Editar Candidato Vaga'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarCandidatoVaga(request, response){
        try {
            return response.status(200).json({confirma: 'Apagar Candidato Vaga'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};