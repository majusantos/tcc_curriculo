-- CREATE DATABASE curriculo;

USE curriculo;

CREATE TABLE `EMPRESAS` (
	`emp_id` int NOT NULL,
	`emp_nome` varchar(50) NOT NULL,
	`emp_cnpj` char(18) NOT NULL,
	`emp_obs` varchar(50) NOT NULL,
	PRIMARY KEY (`emp_id`)
);

CREATE TABLE `VAGAS` (
	`vaga_id` int NOT NULL AUTO_INCREMENT,
	`emp_id` int NOT NULL,
	`vaga_cargo` varchar(50) NOT NULL,
	`vaga_requisitos` varchar(128) NOT NULL,
	`vaga_quantidade` int NOT NULL,
	`vaga_salario` DECIMAL(8,2) NOT NULL,
	`vaga_cargah` varchar(50) NOT NULL,
	`vaga_beneficios` varchar(100),
	`vaga_status` bit NOT NULL,
	PRIMARY KEY (`vaga_id`)
);

CREATE TABLE `CANDIDATOS` (
	`cand_id` int NOT NULL,
	`cand_cpf` char(14) NOT NULL,
	`cand_dtnasc` DATE NOT NULL,
	`cand_profissao` varchar(50) NOT NULL,
	`cand_defi` bit NOT NULL,
	`cand_obs` varchar(50) NOT NULL,
	`cand_nivel_esc` varchar(128) NOT NULL,
	`cand_status` bit NOT NULL,
	PRIMARY KEY (`cand_id`)
);

CREATE TABLE `CURSOS` (
	`cur_id` int NOT NULL AUTO_INCREMENT,
	`cand_id` int NOT NULL,
	`cur_nome` varchar(128) NOT NULL,
	`cur_data_inicio` DATE NOT NULL,
	`cur_data_fim` DATE,
	`cur_obs` varchar(256) NOT NULL,
	`cur_concluido` bit NOT NULL,
	PRIMARY KEY (`cur_id`)
);

CREATE TABLE `EXPERIENCIAS` (
	`exp_id` int NOT NULL AUTO_INCREMENT,
	`exp_empresa` varchar(30) NOT NULL,
	`exp_cargo` varchar(50) NOT NULL,
	`exp_dt_inicio` DATE NOT NULL,
	`exp_dt_fim` DATE,
	`exp_descricao_cargo` varchar(64) NOT NULL,
	`cand_id` int NOT NULL,
	PRIMARY KEY (`exp_id`)
);

CREATE TABLE `CANDIDATO_VAGA` (
	`vaga_id` int NOT NULL,
	`cand_id` int NOT NULL,
	`cv_dt_candidatura` DATE NOT NULL,
	`cv_contratado` bit NOT NULL,
	PRIMARY KEY (`vaga_id`,`cand_id`)
);

CREATE TABLE `USUARIOS` (
	`usu_id` int NOT NULL AUTO_INCREMENT,
	`usu_nome` varchar(50) NOT NULL,
	`usu_email` varchar(80) NOT NULL,
	`usu_senha` varchar(16) NOT NULL,
	`usu_tipo` tinyint NOT NULL,
	`usu_telefone` varchar(14) NOT NULL,
	`usu_endereco` varchar(128) NOT NULL,
	`usu_cep` char(8) NOT NULL,
	`usu_estado` char(2) NOT NULL,
	`usu_cidade` varchar(50) NOT NULL,
	PRIMARY KEY (`usu_id`)
);

ALTER TABLE `EMPRESAS` ADD CONSTRAINT `EMPRESAS_fk0` FOREIGN KEY (`emp_id`) REFERENCES `USUARIOS`(`usu_id`);

ALTER TABLE `VAGAS` ADD CONSTRAINT `VAGAS_fk0` FOREIGN KEY (`emp_id`) REFERENCES `EMPRESAS`(`emp_id`);

ALTER TABLE `CANDIDATOS` ADD CONSTRAINT `CANDIDATOS_fk0` FOREIGN KEY (`cand_id`) REFERENCES `USUARIOS`(`usu_id`);

ALTER TABLE `CURSOS` ADD CONSTRAINT `CURSOS_fk0` FOREIGN KEY (`cand_id`) REFERENCES `CANDIDATOS`(`cand_id`);

ALTER TABLE `EXPERIENCIAS` ADD CONSTRAINT `EXPERIENCIAS_fk0` FOREIGN KEY (`cand_id`) REFERENCES `CANDIDATOS`(`cand_id`);

ALTER TABLE `CANDIDATO_VAGA` ADD CONSTRAINT `CANDIDATO_VAGA_fk0` FOREIGN KEY (`vaga_id`) REFERENCES `VAGAS`(`vaga_id`);

ALTER TABLE `CANDIDATO_VAGA` ADD CONSTRAINT `CANDIDATO_VAGA_fk1` FOREIGN KEY (`cand_id`) REFERENCES `CANDIDATOS`(`cand_id`);








