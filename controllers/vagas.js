const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarVagas(request, response){
        try {
            const sql = 'SELECT vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status = 1 FROM vagas';
            const vagas = await db.query(sql);
            const nReg = vagas[0].lenght;
            return response.status(200).json(
             {
                confirma: 'Sucesso',
                message: 'Vagas cadastradas',
                nItens: nReg,
                itens: vagas[0]
            });
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarVagas(request, response){
        try {
            const { emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status} = request.body;
            const sql = 'INSERT INTO vagas (emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status) VALUES (?,?,?,?,?,?,?,?);';
            const values = [ emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status]
            const confirmacao = await db.query(sql, values);
            const vaga_id = confirmacao[0].insertId;
            return response.status(200).json(
                {
                    confirma:'Sucesso',
                    message:'Vaga cadastrada com sucesso',
                    vaga_id
                }
            );
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