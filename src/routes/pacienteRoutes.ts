import { Router } from 'express';
import { PacienteController } from '../controllers/pacienteController';

const router = Router();
const pacienteController = new PacienteController();

router.get('/', pacienteController.getAllPacientes);
router.get('/:id', pacienteController.getPacienteById);



export default router;
