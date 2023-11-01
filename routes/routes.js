const express = require ('express');
const router  = express.Router();

// Referência a controllers que serão ultilizados nas rotas
const CandidatoVagaController = require  ('../controllers/candidato_vaga');
const CandidatosController = require  ('../controllers/candidatos');
const CursosController = require  ('../controllers/cursos');
const EmpresasController = require  ('../controllers/empresas');
const ExperienciassController = require  ('../controllers/experiencias');
const UsuariosController = require  ('../controllers/usuarios');
const VagasController = require  ('../controllers/vagas');

// definição das rotas
router.get('/candidato_vaga', CandidatoVagaController.listarCandidatoVaga);
router.post('/candidato_vaga', CandidatoVagaController.cadastrarCandidatoVaga);
router.patch('/candidato_vaga', CandidatoVagaController.editarCandidatoVaga);
router.delete('/candidato_vaga', CandidatoVagaController.apagarCandidatoVaga);

router.get('/candidatos', CandidatosController.listarCandidatos);
router.post('/candidatos', CandidatosController.cadastrarCandidatos);
router.patch('/candidatos/:cand_id', CandidatosController.editarCandidatos);
router.delete('/candidatos/:cand_id', CandidatosController.apagarCandidatos);

router.get('/cursos', CursosController.listarCursos);
router.post('/cursos', CursosController.cadastrarCursos);
router.patch('/cursos/:cur_id', CursosController.editarCursos);
router.delete('/cursos/:cur_id', CursosController.apagarCursos);

router.get('/empresas', EmpresasController.listarEmpresas);
router.post('/empresas', EmpresasController.cadastrarEmpresas);
router.patch('/empresas/:emp_id', EmpresasController.editarEmpresas);
router.delete('/empresas/:emp_id', EmpresasController.apagarEmpresas);

router.get('/experiencias', ExperienciassController.listarExperiencias);
router.post('/experiencias', ExperienciassController.cadastrarExperiencias);
router.patch('/experiencias/:exp_id', ExperienciassController.editarExperiencias);
router.delete('/experiencias/:exp_id', ExperienciassController.apagarExperiencias);

router.get('/usuarios', UsuariosController.listarUsuarios);
router.post('/usuarios', UsuariosController.cadastrarUsuarios);
router.patch('/usuarios/:usu_id', UsuariosController.editarUsuarios);
router.delete('/usuarios/:usu_id', UsuariosController.apagarUsuarios);

router.get('/vagas', VagasController.listarVagas);
router.post('/vagas', VagasController.cadastrarVagas);
router.patch('/vagas/:vaga_id', VagasController.editarVagas);
router.delete('/vagas/:vaga_id', VagasController.apagarVagas);

module.exports = router;





