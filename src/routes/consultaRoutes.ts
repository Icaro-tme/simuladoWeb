import { Router } from 'express';
import { ConsultaController } from '../controllers/consultaController';

const router = Router();
const consultaController = new ConsultaController();

router.get('/', consultaController.getAllConsultas);
router.get('/:id', consultaController.getConsultaById);
router.post('/', consultaController.createConsulta);
router.put('/:id', consultaController.updateConsulta);
router.delete('/:id', consultaController.deleteConsulta);

export default router;
