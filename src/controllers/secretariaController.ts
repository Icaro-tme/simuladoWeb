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

  public createSecretaria = async (req: Request, res: Response) => {
    const { nome, RG } = req.body;

    try {
        const secretaria = await this.secretariaService.createSecretaria({ nome, RG });
        res.status(201).json(secretaria);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar secretaria' });
    }
};


public deleteSecretaria = async (req: Request, res: Response) => {
  const secretariaId = parseInt(req.params.id);

  try {
      const secretaria = await this.secretariaService.deleteSecretaria(secretariaId);
      if (secretaria) {
          res.json(secretaria);
      } else {
          res.status(404).json({ error: 'Secretaria não encontrada' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar secretaria' });
  }
};

public updateSecretaria = async (req: Request, res: Response) => {
  const secretariaId = parseInt(req.params.id);
  const { nome, RG } = req.body;

  try {
      const secretaria = await this.secretariaService.updateSecretaria(secretariaId, { nome, RG });
      if (secretaria) {
          res.json(secretaria);
      } else {
          res.status(404).json({ error: 'Secretaria não encontrada' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar secretaria' });
  }
};

}
