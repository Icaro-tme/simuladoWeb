import { Request, Response } from 'express';
import { AgendaService } from '../services/agendaService';

export class AgendaController {
  private agendaService: AgendaService;

  constructor() {
    this.agendaService = new AgendaService();
  }

  public getAllAgendas = async (req: Request, res: Response) => {
    try {
      const agendas = await this.agendaService.getAllAgendas();
      res.json(agendas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar agendas' });
    }
  };

  public getAgendaById = async (req: Request, res: Response) => {
    const agendaId = parseInt(req.params.id);

    try {
      const agenda = await this.agendaService.getAgendaById(agendaId);
      if (agenda) {
        res.json(agenda);
      } else {
        res.status(404).json({ error: 'Agenda não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar agenda' });
    }
  };

  // Adicione métodos para criar, atualizar e excluir agendas aqui
}
