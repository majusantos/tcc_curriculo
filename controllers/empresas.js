const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarEmpresas(request, response){
        try {
            const sql = 'SELECT emp_id, emp_nome, emp_cnpj, emp_obs FROM empresas';
            const empresas = await db.query(sql);
            const nReg = empresas[0].lenght;
            return response.status(200).json(
            {
                confirma: 'Sucesso',
                message: 'Empresas cadastradas',
                nItens: nReg,
                itens: empresas[0]
            });
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarEmpresas(request, response){
        try {
            const {emp_id, emp_nome, emp_cnpj, emp_obs} = request.body;
            const sql = 'INSERT INTO empresas (emp_id, emp_nome, emp_cnpj, emp_obs) VALUES (?,?,?,?);';
            const values = [emp_id, emp_nome, emp_cnpj, emp_obs]
            const confirmacao = await db.query(sql, values);
            const emp_id2 = confirmacao[0].insertId;
            return response.status(200).json(
                {
                    confirma:'Sucesso',
                    message:'Empresa efetuada com sucesso',
                    emp_id2
                }
            );
            }
        
        catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarEmpresas(request, response){
        try {
            const {emp_nome, emp_cnpj, emp_obs} = request.body;
            const {emp_id} = request.params;
            const sql = 'UPDATE empresas set emp_nome = ?, emp_cnpj = ?, emp_obs = ? WHERE emp_id;';
            const values = [emp_nome, emp_cnpj, emp_obs];
            const atualizacao = await db.query (sql, values);
            return response.status(200).jason(
                {
                 confirma: 'Sucesso',
                 message: 'Empresa' + emp_id + 'atualizada com sucesso!',
                 registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarEmpresas(request, response){
        try {
            const { emp_id } = request.params;
            const sql = 'DELETE FROM empresas WHERE emp_id = ?';
            const values = [emp_id];
            await db.query(sql, values);
            return response.status(200).json(
                 {
                    confirma:'Sucesso',
                    message:'Empresa com o id' + emp_id + 'foi excluída com sucesso'
                 }
            );
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};