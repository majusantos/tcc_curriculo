const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarVagas(request, response){
        try {
            const sql = 'SELECT vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status FROM vagas';
            const vagas = await db.query(sql);
            return response.status(200).json({confirma: vagas});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarVagas(request, response){
        try {
            return response.status(200).json({confirma: 'Cadastrar Vagas'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarVagas(request, response){
        try {
            return response.status(200).json({confirma: 'Editar Vagas'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarVagas(request, response){
        try {
            return response.status(200).json({confirma: 'Apagar Vagas'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};