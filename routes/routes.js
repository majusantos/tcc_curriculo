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
router.patch('/candidatos', CandidatosController.editarCandidatos);
router.delete('/candidatos', CandidatosController.apagarCandidatos);

router.get('/cursos', CursosController.listarCursos);
router.post('/cursos', CursosController.cadastrarCursos);
router.patch('/cursos', CursosController.editarCursos);
router.delete('/cursos', CursosController.apagarCursos);

router.get('/empresas', EmpresasController.listarEmpresas);
router.post('/empresas', EmpresasController.cadastrarEmpresas);
router.patch('/empresas', EmpresasController.editarEmpresas);
router.delete('/empresas', EmpresasController.apagarEmpresas);

router.get('/experiencias', ExperienciassController.listarExperiencias);
router.post('/experiencias', ExperienciassController.cadastrarExperiencias);
router.patch('/experiencias', ExperienciassController.editarExperiencias);
router.delete('/experiencias', ExperienciassController.apagarExperiencias);

router.get('/usuarios', UsuariosController.listarUsuarios);
router.post('/usuarios', UsuariosController.cadastrarUsuarios);
router.patch('/usuarios', UsuariosController.editarUsuarios);
router.delete('/usuarios', UsuariosController.apagarUsuarios);

router.get('/vagas', VagasController.listarVagas);
router.post('/vagas', VagasController.cadastrarVagas);
router.patch('/vagas', VagasController.editarVagas);
router.delete('/vagas', VagasController.apagarVagas);

module.children.exports = router;





