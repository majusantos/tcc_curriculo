const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarExperiencias(request, response){
        try {
            return response.status(200).json({confirma: 'Listar Experiencias'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};