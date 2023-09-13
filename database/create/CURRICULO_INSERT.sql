
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
(3, 'maitê Corte Real', 'maite_cortereal@girocenter.com.br', '154326', 1, '(14)99581-2692', 'Rua Angelo Sanches , 442 - Centro', '17763000', 'SP', 'Arco-iris');

INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(4, 'Mateus Kauê Murilo Silveira', 'mateuskauesilveira@pubdesign.com.br', '143265', 1, '(14)98558-8589', 'Rua Angelo Sanches , 100 - Centro', '17863000', 'SP', 'Arco_iris');

INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(5, 'Regina Heloisa Adriana Souza', 'regina-souza71@temp.com.br', '132654', 2, '(14)99504-8501','Rua João Grigoletto , 94 - Centro', '17963000', 'SP', 'araras');

INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(6, 'Rafael Daniel Silveira', 'rafaeldanielsilveira@solpro.biz', '126543', 2, '(19)99258-9866', 'Rua José das agulhas Camargo, 72 - Centro', '17103000', 'PR', 'abapã');

INSERT INTO usuarios 
(usu_id, usu_nome, usu_email, usu_senha, usu_tipo, usu_telefone, usu_endereco, usu_cep, usu_estado, usu_cidade) 
VALUES 
(7, 'Felipe Marcos Isaac da Mata', 'felipemarcosdamata@netjacarei.com.br', '165432', 2, '(19)99433-1973', 'Rua José das madeiras Camargo, 34 - Centro', '17113000', 'sp', 'jundiai');

INSERT INTO empresas
(emp_id, emp_nome, emp_cnpj, emp_obs)
VALUES 
(1,'Silvana Mirella Mariane Peixoto', '23554257621', 'Que tenha pelo menos o ensino medio completo');

INSERT INTO empresas
(emp_id, emp_nome, emp_cnpj, emp_obs)
VALUES 
(2,'maitê Corte Real', '45765598622', 'Preciamos de alguem com curso');

INSERT INTO empresas
(emp_id, emp_nome, emp_cnpj, emp_obs)
VALUES 
(3,'Mateus Kauê Murilo Silveira', '33487190491', 'Que tenha se formado na profissao');

INSERT INTO candidatos
(cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status)
VALUES
(1, '11122334455', '1997-07-10', 'administação', 0, 'sou formada em adm', 'ensino superior', 1);

INSERT INTO candidatos
(cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status)
VALUES
(2, '88199226891', '1999-09-01', 'fisioterapia', 0, 'quero trabalhar em consultorios', 'ensino superior', 1);

INSERT INTO candidatos
(cand_id, cand_cpf, cand_dtnasc,cand_profissao, cand_defi, cand_obs, cand_nivel_esc, cand_status)
VALUES
(3, '52772339495', '1996-04-05', 'fotografia', 0, 'quero trabalhar em empresas,sou cursado', 'ensino superior', 1);

INSERT INTO cursos 
(cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido)
VALUES
(1, 1, 'ingles', '2021-02-05', '2023-01-02', 'presencial', 1);

INSERT INTO cursos 
(cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido)
VALUES
(2, 2, 'enfermagem', '2019-05-16', '2021-06-20', 'presencial', 0); 

INSERT INTO cursos 
(cur_id, cand_id, cur_nome, cur_data_inicio, cur_data_fim, cur_obs, cur_concluido)
VALUES
(3, 3, 'photoshop', '2018-06-07', '2020-12-21', 'online', 1); 

INSERT INTO experiencias
(exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id)
VALUES
(1, 'jocec', 'administrador', '1997-05-02', '2021-03-23', 'atuava como administrador geral da empresa', 1);

INSERT INTO experiencias
(exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id)
VALUES
(2, 'clínica da dr. Claudia', 'fisioterapeuta', '1999-02-09', '2022-07-14', 'atuava como fisioterapeuta do consultório', 2);

INSERT INTO experiencias
(exp_id, exp_empresa, exp_cargo, exp_dt_inicio, exp_dt_fim, exp_descricao_cargo, cand_id)
VALUES
(3, 'vision', 'fotografo', '2002-08-28', '2023-06-18', 'atuava como diretor de fotografia da empresa', 3);

INSERT INTO vagas 
(vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status)
VALUES 
(1, 1, 'administrador', 'ter velocidade com calculos', 10, 1350, '8 horas', 'vale alimentação', 1);  

INSERT INTO vagas 
(vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status)
VALUES 
(2, 2, 'fisioterapeuta', 'ser profissional na área', 10, 10000, '8 horas', 'plano de saúde', 1);  

INSERT INTO vagas 
(vaga_id, emp_id, vaga_cargo, vaga_requisitos, vaga_quantidade, vaga_salario, vaga_cargah, vaga_beneficios, vaga_status)
VALUES 
(3, 3, 'fotografo', 'ter facilidade com câmeras', 15, 1300, '8 horas', 'vale transporte', 1);  

