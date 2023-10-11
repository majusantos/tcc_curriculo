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
            return response.status(200).json({confirma: 'Cadastrar Cursos'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarCursos(request, response){
        try {
            return response.status(200).json({confirma: 'Editar Cursos'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarCursos(request, response){
        try {
            return response.status(200).json({confirma: 'Apagar Cursos'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};