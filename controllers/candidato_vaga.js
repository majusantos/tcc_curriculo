const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarCandidatoVaga(request, response){
        try {
            const sql = 'SELECT vaga_id, cand_id, cv_dt_candidatura, cv_contratado = 1 FROM candidato_vaga';
            const candidato_vaga = await db.query(sql);
            const nReg = candidato_vaga[0].lenght;
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Candidato Vaga cadastrados',
                    nItens: nReg,
                    itens: candidato_vaga[0]
                }
            );
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