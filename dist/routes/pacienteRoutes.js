"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pacienteController_1 = require("../controllers/pacienteController");
const router = (0, express_1.Router)();
const pacienteController = new pacienteController_1.PacienteController();
router.get('/', pacienteController.getAllPacientes);
router.get('/:id', pacienteController.getPacienteById);
// Adicione rotas para criar, atualizar e excluir pacientes aqui
exports.default = router;
