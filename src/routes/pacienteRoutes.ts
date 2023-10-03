import { Router } from 'express';
import { PacienteController } from '../controllers/pacienteController';

const router = Router();
const pacienteController = new PacienteController();

router.get('/', pacienteController.getAllPacientes);
router.get('/:id', pacienteController.getPacienteById);

// Adicione rotas para criar, atualizar e excluir pacientes aqui

export default router;
