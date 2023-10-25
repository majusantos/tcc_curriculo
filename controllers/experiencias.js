const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarExperiencias(request, response){
        try {
            const sql = 'SELECT exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id FROM experiencias';
            const experiencias = await db.query(sql);
            const nReg = experiencias[0].lenght;
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Experiências cadastradas',
                    nItens: nReg,
                    itens: experiencias[0]
                }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarExperiencias(request, response){
        try {
            const {exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id} = request.body;
            const sql = 'INSERT INTO experiencias (exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id) VALUES (?,?,?,?,?,?);';
            const values = [exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id]
            const confirmacao = await db.query(sql, values);
            const exp_id = confirmacao[0].insertId;
            return response.status(200).json(
                {
                    confirma:'Sucesso',
                    message:'Experiencia cadastrada com sucesso',
                    exp_id
                }
            );    
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