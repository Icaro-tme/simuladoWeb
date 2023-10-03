import { Request, Response } from 'express';
import { SecretariaService } from '../services/secretariaService';

export class SecretariaController {
  private secretariaService: SecretariaService;

  constructor() {
    this.secretariaService = new SecretariaService();
  }

  public getAllSecretarias = async (req: Request, res: Response) => {
    try {
      const secretarias = await this.secretariaService.getAllSecretarias();
      res.json(secretarias);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar secretárias' });
    }
  };

  public getSecretariaById = async (req: Request, res: Response) => {
    const secretariaId = parseInt(req.params.id);

    try {
      const secretaria = await this.secretariaService.getSecretariaById(secretariaId);
      if (secretaria) {
        res.json(secretaria);
      } else {
        res.status(404).json({ error: 'Secretaria não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar secretaria' });
    }
  };

  // Adicione métodos para criar, atualizar e excluir secretárias aqui
}
