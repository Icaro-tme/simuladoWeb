import { Router } from 'express';
import { SecretariaController } from '../controllers/secretariaController';

const router = Router();
const secretariaController = new SecretariaController();

router.get('/', secretariaController.getAllSecretarias);
router.get('/:id', secretariaController.getSecretariaById);

// Adicione rotas para criar, atualizar e excluir secretárias aqui

export default router;
