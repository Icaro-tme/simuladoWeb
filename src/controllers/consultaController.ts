import { Request, Response } from 'express';
import { ConsultaService } from '../services/consultaService';

export class ConsultaController {
  private consultaService: ConsultaService;

  constructor() {
    this.consultaService = new ConsultaService();
  }

  public getAllConsultas = async (req: Request, res: Response) => {
    try {
      const consultas = await this.consultaService.getAllConsultas();
      res.json(consultas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar consultas' });
    }
  };

  public getConsultaById = async (req: Request, res: Response) => {
    const consultaId = parseInt(req.params.id);

    try {
      const consulta = await this.consultaService.getConsultaById(consultaId);
      if (consulta) {
        res.json(consulta);
      } else {
        res.status(404).json({ error: 'Consulta não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar consulta' });
    }
  };

  // Adicione métodos para criar, atualizar e excluir consultas aqui
}
