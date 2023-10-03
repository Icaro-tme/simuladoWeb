import { Router } from 'express';
import { ConsultaController } from '../controllers/consultaController';

const router = Router();
const consultaController = new ConsultaController();

router.get('/', consultaController.getAllConsultas);
router.get('/:id', consultaController.getConsultaById);

// Adicione rotas para criar, atualizar e excluir consultas aqui

export default router;
