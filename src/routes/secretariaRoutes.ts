import { Router } from 'express';
import { SecretariaController } from '../controllers/secretariaController';

const router = Router();
const secretariaController = new SecretariaController();

router.get('/', secretariaController.getAllSecretarias);
router.get('/:id', secretariaController.getSecretariaById);
router.post('/', secretariaController.createSecretaria);
router.put('/:id', secretariaController.updateSecretaria);
router.delete('/:id', secretariaController.deleteSecretaria);

export default router;
