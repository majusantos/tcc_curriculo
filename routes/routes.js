const express = require ('express');
const router = express.Router();

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
// post
// patch
// delete

router.get('/candidatos', CandidatosController.listarCandidatos);
// post
// patch
// delete

router.get('/cursos', CursosController.listarCursos);
// post
// patch
// delete

router.get('/empresas', EmpresasControllerController.listarEmpresas);
// post
// patch
// delete

router.get('/experiencias', ExperienciassController.listarExperiencias);
// post
// patch
// delete

router.get('/usuarios', UsuariosController.listarUsuarios);
// post
// patch
// delete

router.get('/vagas', VagasController.listarVagas);
// post
// patch
// delete

module.children.exports = router;





