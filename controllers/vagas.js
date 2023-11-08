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
            const {emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status} = request.body;
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
            const {emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status} = request.body;
            const {vaga_id} = request.params;
            const sql = 'UPDATE vagas set emp_id = ?, vaga_cargo = ?, vaga_requisitos = ?, vaga_quantidade = ?, vaga_salario = ?, vaga_cargah = ?, vaga_beneficios = ?, vaga_status = ? WHERE vaga_id = ?;';
            const values = [emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status, vaga_id];
            const atualizacao = await db.query (sql, values);
            return response.status(200).json(
                {
                 confirma: 'Sucesso',
                 message: 'Vaga ' + vaga_id + ' atualizada com sucesso!',
                 registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarVagas(request, response){
        try {
            const { vaga_id } = request.params;
            const sql = 'DELETE FROM vagas WHERE vaga_id = ?';
            const values = [vaga_id];
            await db.query(sql, values);
            return response.status(200).json(
                 {
                    confirma:'Sucesso',
                    message:'Vaga com o id ' + vaga_id + ' foi excluído com sucesso'
                 }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};