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
            const {vaga_id, cand_id, cv_dt_candidatura, cv_contratado} = request.body;
            const sql = 'INSERT INTO candidato_vaga (vaga_id, cand_id, cv_dt_candidatura, cv_contratado) VALUES (?,?,?,?);';
            const values = [vaga_id, cand_id, cv_dt_candidatura, cv_contratado]
            const confirmacao = await db.query(sql, values);
            const cadastro = confirmacao[0].insertId;
            return response.status(200).json(
              {
                confirma:'Sucesso',
                message:'Curriculo enviado com sucesso',
                vaga_id, 
                cand_id
              }  
            );  

        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCandidatoVaga(request, response){
        try {
            const {cv_dt_candidatura, cv_contratado} = request.body;
            const {vaga_id, cand_id} = request.params;
            const sql = 'UPDATE candidato_vaga set cv_dt_candidatura = ?, cv_contratado = ? WHERE vaga_id = ? AND cand_id = ?;';
            const values = [cv_dt_candidatura, cv_contratado, vaga_id, cand_id];
            const atualizacao = await db.query (sql, values);
            return response.status(200).json(
                {
                 confirma: 'Sucesso',
                 message: 'Proposta de vaga ' + vaga_id + ' atualizado com sucesso!',
                 registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarCandidatoVaga(request, response){
        try {
            const {vaga_id, cand_id} = request.params;
            const sql = 'DELETE FROM candidato_vaga  WHERE vaga_id = ? AND cand_id = ?;';
            const values = [vaga_id, cand_id];
            await db.query(sql, values);
            return response.status(200).json(
                 {
                    confirma:'Sucesso',
                    message:'Proposta com o id ' + vaga_id + ' foi excluída com sucesso'
                 }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};