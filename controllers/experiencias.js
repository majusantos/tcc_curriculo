const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarExperiencias(request, response){
        try {
            const sql = 'SELECT exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id FROM experiencias';
            const experiencias = await db.query(sql);
            return response.status(200).json({confirma: experiencias});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarExperiencias(request, response){
        try {
            return response.status(200).json({confirma: 'Cadastrar Experiencias'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarExperiencias(request, response){
        try {
            return response.status(200).json({confirma: 'Editar Experiencias'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarExperiencias(request, response){
        try {
            return response.status(200).json({confirma: 'Apagar Experiencias'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};