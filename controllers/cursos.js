const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarCursos(request, response){
        try {
            const sql = 'SELECT cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido = 1 FROM cursos';
            const cursos = await db.query(sql);
            const nReg = cursos[0].lenght;
            return response.status(200).json(
            {
                 confirma: 'Sucesso',
                 message: 'Cursos cadastrados',
                 nItens: nReg,
                 itens: cursos[0]    
            });
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarCursos(request, response){
        try {
            const {cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido} = request.body;
            const sql = 'INSERT INTO cursos (cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido) VALUES (?,?,?,?,?,?);';
            const values = [cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido]
            const confirmacao = await db.query(sql, values);
            const cur_id = confirmacao[0].insertId;
            return response.status(200).json(
              {
                confirma:'Sucesso',
                message:'Curso efetuado com sucesso',
                cur_id,
              }  
            );  

        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCursos(request, response){
        try {
            const {cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido} = request.body;
            const {cur_id} = request.params;
            const sql = 'UPDATE cursos set cand_id = ?, cur_nome = ?, cur_data_inicio = ?, cur_data_fim = ?, cur_obs = ?, cur_concluido = ? WHERE cur_id = ?;';
            const values = [cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido, cur_id];
            const atualizacao = await db.query (sql, values);
            return response.status(200).json(
                {
                 confirma: 'Sucesso',
                 message: 'Curso ' + cur_id + ' atualizado com sucesso!',
                 registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarCursos(request, response){
        try {
            const { cur_id } = request.params;
            const sql = 'DELETE FROM cursos WHERE cur_id = ?';
            const values = [cur_id];
            await db.query(sql, values);
            return response.status(200).json(
                 {
                    confirma:'Sucesso',
                    message:'Curso com o id ' + cur_id + ' foi excluído com sucesso'
                 }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};