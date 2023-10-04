const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarEmpresas(request, response){
        try {
            const sql = 'SELECT emp_id, emp_nome, emp_cnpj, emp_obs FROM empresas';
            const empresas = await db.query(sql)
            return response.status(200).json({confirma: empresas});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarEmpresas(request, response){
        try {
            return response.status(200).json({confirma: 'Cadastrar Empresas'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarEmpresas(request, response){
        try {
            return response.status(200).json({confirma: 'Editar Empresas'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarEmpresas(request, response){
        try {
            return response.status(200).json({confirma: 'Apagar Empresas'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};