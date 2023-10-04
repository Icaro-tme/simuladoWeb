import { Router } from 'express';
import { AgendaController } from '../controllers/agendaController';

const router = Router();
const agendaController = new AgendaController();

router.get('/', agendaController.getAllAgendas);
router.get('/:id', agendaController.getAgendaById);
router.post('/', agendaController.createAgenda);
router.put('/:id', agendaController.updateAgenda);
router.delete('/:id', agendaController.deleteAgenda);

export default router;
