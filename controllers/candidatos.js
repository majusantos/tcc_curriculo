const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarCandidatos(request, response){
        try {
            const sql = 'SELECT cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi = 1, cand_obs, cand_nivel_esc, cand_status = 1 FROM candidatos';
            const candidatos = await db.query(sql);
            const nReg = candidatos[0].lenght;
            return response.status(200).json(
            {
                confirma: 'Sucesso',
                message: 'Candidatos cadastrados',
                nItens: nReg,
                itens: candidatos[0]
            }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarCandidatos(request, response){
        try {
            const {cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status} = request.body;
            const sql = 'INSERT INTO candidatos (cand_id, cand_cpf, cand_dtnasc, cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';
            const values = [cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status]
            const confirmacao = await db.query(sql, values);
            const cand_id2 = confirmacao[0].insertId;
            return response.status(200).json(
                {
                    confirma:'Sucesso',
                    message:'Cadastro efetuado com sucesso',
                    cand_id 
                }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCandidatos(request, response){
        try {
            const {cand_cpf, cand_dtnasc, cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status} = request.body;
            const {cand_id} = request.params;
            const sql = 'UPDATE candidatos set cand_cpf = ?, cand_dtnasc = ?, cand_profissao = ?, cand_defi = ?, cand_obs = ?, cand_nivel_esc = ?, cand_status = ? WHERE cand_id;';
            const values = [cand_cpf, cand_dtnasc, cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status];
            const atualizacao = await db.query (sql, values);
            return response.status(200).json(
                {
                 confirma: 'Sucesso',
                 message: 'Candidato ' + cand_id + ' atualizado com sucesso!',
                 registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarCandidatos(request, response){
        try {
            const { cand_id } = request.params;
            const sql = 'DELETE FROM candidatos WHERE cand_id = ?';
            const values = [cand_id];
            await db.query(sql, values);
            return response.status(200).json(
                 {
                    confirma:'Sucesso',
                    message:'Candidato com o id ' + cand_id + ' foi excluído com sucesso'
                 }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};