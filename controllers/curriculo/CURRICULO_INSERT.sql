
-- Usuário
-- TIPOS USUARIO 0 = administrador, 1 = empresa, 2 = candidato
INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(1, 'Márcio Raimundo Diego Gonçalves', 'marcio_raimundo_goncalves@dedicasa.com.br', '123456', 0, '(14)99999-1512', 'Rua Brasil, 91 - Centro', '17563000', 'SP', 'Tupã');

INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(2, 'Silvana Mirella Mariane Peixoto', 'silvanamirellapeixoto@jovempanfmtaubate.com.br', '165432', 1, '(41)2977-1860', 'Rua José das Dores Camargo, 94 - Centro', '17663000', 'PR', 'Alexandra');

INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(3, 'Maitê Corte Real', 'maite_cortereal@girocenter.com.br', '154326', 1, '(14)99581-2692', 'Rua Angelo Sanches , 442 - Centro', '17763000', 'SP', 'Arco-iris');

INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(4, 'Mateus Kauê Murilo Silveira', 'mateuskauesilveira@pubdesign.com.br', '143265', 1, '(14)98558-8589', 'Rua Angelo Sanches , 100 - Centro', '17863000', 'SP', 'Arco_iris');

INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(5, 'Regina Heloisa Adriana Souza', 'regina-souza71@temp.com.br', '132654', 2, '(14)99504-8501','Rua João Grigoletto , 94 - Centro', '17963000', 'SP', 'Araras');

INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(6, 'Rafael Daniel Silveira', 'rafaeldanielsilveira@solpro.biz', '126543', 2, '(19)99258-9866', 'Rua José das Agulhas Camargo, 72 - Centro', '17103000', 'PR', 'Abapã');

INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(7, 'Felipe Marcos Isaac da Mata', 'felipemarcosdamata@netjacarei.com.br', '165432', 2, '(19)99433-1973', 'Rua José das Madeiras Camargo, 34 - Centro', '17113000', 'sp', 'Jundiai');

-- empresas
INSERT INTO empresas
(emp_id, emp_nome, emp_cnpj, emp_obs)
VALUES 
(2, 'Silvana Mirella Mariane Peixoto ME', '23.554.25/0001-21', 'Empresa de fotografia e álbuns');

INSERT INTO empresas
(emp_id, emp_nome, emp_cnpj, emp_obs)
VALUES 
(3, 'Clinica de reabilitação CURAJA', '45.655.986/0001-22', 'Fisioterapia e cuidados com idosos');

INSERT INTO empresas
(emp_id, emp_nome, emp_cnpj, emp_obs)
VALUES 
(4, 'Mato verde', '33.487.190/0004-91', 'Limpeza de quintais e jardinagem');

-- candidatos
INSERT INTO candidatos
(cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status)
VALUES
(5, '111.223.344-55', '1987-07-10', 'Administradora de empresas', false, 'Trabalho somente em Home Office', 'Ensino superior em administração de empresas', 1);

INSERT INTO candidatos
(cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status)
VALUES
(6, '881.992.268-91', '1995-09-01', 'Fisioterapeuta', 0, 'Quero trabalhar em consultorios', 'Ensino superior em fisioterapia', 1);

INSERT INTO candidatos
(cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status)
VALUES
(7, '527.723.394-95', '1996-04-05', 'Fotografo', 1, 'Def. auditiva', 'Ensino médio', 1);


-- cursos
INSERT INTO cursos 
(cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido)
VALUES
(1, 5, 'Inglês', '2021-02-05', '2023-01-02', 'Presencial', 1); 

INSERT INTO cursos 
(cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido)
VALUES
(2, 5, 'Ténico em administração', '2008-06-01', '2009-12-15', 'Presencial', 1);

INSERT INTO cursos 
(cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido)
VALUES
(3, 5, 'Ténico em administração', '2013-06-01', '2017-12-15', 'Presencial', 1);

INSERT INTO cursos 
(cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido)
VALUES
(4, 6, 'Téc. Enfermagem', '2013-05-16', '2014-06-20', 'Presencial', 1); 

INSERT INTO cursos 
(cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido)
VALUES
(5, 6, 'Superior em Fisioterapia', '2014-05-16', '2020-06-20', 'Presencial', 1); 

INSERT INTO cursos 
(cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido)
VALUES
(6, 7, 'Photoshop', '2018-06-07', '2020-12-21', 'online', 1); 

-- experiencias
INSERT INTO experiencias
(exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id)
VALUES
(1, 'Jocec', 'Aux. Admnistrativo', '2005-05-02', '2010-03-23', 'Trabalho no setor financeiro', 5); 

INSERT INTO experiencias
(exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id)
VALUES
(2, 'Escritório Brasil', 'Téc. Administrativo', '2010-05-02', '2020-03-23', 'Atuação no RH', 5); 

INSERT INTO experiencias
(exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id)
VALUES
(3, 'Molas São Paulo', 'Administradora', '2020-03-24', '2022-03-30', 'Atuação em compras', 5);

INSERT INTO experiencias
(exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id)
VALUES
(4, 'Clínica da Dr. Claudia', 'Fisioterapeuta', '2020-12-15', '2023-07-14', 'Atuava como fisioterapeuta do consultório', 6); 

INSERT INTO experiencias
(exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id)
VALUES
(5, 'Vision', 'Fotografo', '2013-08-28', '2023-06-18', 'Atuava como fotográfo', 7);

-- vagas
INSERT INTO vagas 
(vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status)
VALUES 
(1, 4, 'Administrador', 'Ter experiência na área', 1, 4800.00, '8 horas', 'Vale alimentação', 1);  

INSERT INTO vagas 
(vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status)
VALUES 
(2, 4, 'Jardineiro', 'Curso de paisagismo', 5, 2200.00, '8 horas', null, 1);

INSERT INTO vagas 
(vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status)
VALUES 
(3, 4, 'Motorista', 'Habilitação tipo C', 1, 3200.00, '44 horas semanais', 'Folga no domingo', 0);

INSERT INTO vagas 
(vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status)
VALUES 
(4, 3, 'Fisioterapeuta', 'Ser profissional na área', 2, 4000.00, '6 horas', 'Plano de saúde', 1);  

INSERT INTO vagas 
(vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status)
VALUES 
(5, 2, 'Fotografo', 'Ter facilidade com câmeras digitais', 4, 1900.00, 'Noites de fim de semana', 'Vale transporte', 1);  

-- candidato_vaga
INSERT INTO candidato_vaga (vaga_id, cand_id, cv_dt_candidatura, cv_contratado) VALUES (1, 5, '2023-08-20', 0);

INSERT INTO candidato_vaga (vaga_id, cand_id, cv_dt_candidatura, cv_contratado) VALUES (4, 6, '2023-08-20', 0);

INSERT INTO candidato_vaga (vaga_id, cand_id, cv_dt_candidatura, cv_contratado) VALUES (5, 7, '2023-08-20', 0);

INSERT INTO candidato_vaga (vaga_id, cand_id, cv_dt_candidatura, cv_contratado) VALUES (2, 7, '2023-08-21', 0);