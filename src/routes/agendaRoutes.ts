import { Router } from 'express';
import { AgendaController } from '../controllers/agendaController';

const router = Router();
const agendaController = new AgendaController();

router.get('/', agendaController.getAllAgendas);
router.get('/:id', agendaController.getAgendaById);

// Adicione rotas para criar, atualizar e excluir agendas aqui

export default router;
