const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarUsuarios(request, response){
        try {
            const sql = 'SELECT usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade FROM usuarios';
            const usuarios = await db.query(sql);
            const nReg = usuarios[0].lenght;
            return response.status(200).json(
            {
                confirma: 'Sucesso',
                message: 'Usuários cadastrados',
                nItens: nReg,
                itens: usuarios[0]
            });
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarUsuarios(request, response){
        try {
            const {usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade} = request.body;
            const sql = 'INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) VALUES (?,?,?,?,?,?,?,?,?);';
            const values = [usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade]
            const confirmacao = await db.query(sql, values);
            const usu_id = confirmacao[0].insertId;
            return response.status(200).json(
                {
                    confirma:'Sucesso',
                    message:'Usuario cadastrado com sucesso',
                    usu_id
                }
            ); 
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async editarUsuarios(request, response){
        try {
            return response.status(200).json({confirma: 'Editar Usuarios'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
    async apagarUsuarios(request, response){
        try {
            return response.status(200).json({confirma: 'Apagar Usuarios'});
        } catch (error) {
            return response.status (500).json({confirma: 'Erro', message: error});
        }
    },
};