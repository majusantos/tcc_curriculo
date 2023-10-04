const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarCandidatos(request, response){
        try {
            const sql = 'SELECT cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status FROM candidatos';
            const candidatos = await db.query(sql);
            return response.status(200).json({confirma: candidatos});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarCandidatos(request, response){
        try {
            return response.status(200).json({confirma: 'Cadastrar Candidatos'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCandidatos(request, response){
        try {
            return response.status(200).json({confirma: 'Editar Candidatos'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarCandidatos(request, response){
        try {
            return response.status(200).json({confirma: 'Apagar Candidatos'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};