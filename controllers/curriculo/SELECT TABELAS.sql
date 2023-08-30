SELECT usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade FROM usuarios; 
SELECT emp_id, emp_nome, emp_cnpj, emp_obs FROM empresas;
SELECT cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status FROM candidatos;
SELECT cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido FROM cursos;
SELECT exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id FROM experiencias;
SELECT vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status FROM vagas;
SELECT vaga_id, cand_id, cv_dt_candidatura, cv_contratado FROM candidato_vaga;