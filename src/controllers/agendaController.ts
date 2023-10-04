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

  public createAgenda = async (req: Request, res: Response) => {
    const { data } = req.body;

    try {
        const agenda = await this.agendaService.createAgenda({ data });
        res.status(201).json(agenda);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar agenda' });
    }
};

public deleteAgenda = async (req: Request, res: Response) => {
  const agendaId = parseInt(req.params.id);

  try {
      const agenda = await this.agendaService.deleteAgenda(agendaId);
      if (agenda) {
          res.json(agenda);
      } else {
          res.status(404).json({ error: 'Agenda não encontrada' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir agenda' });
  }
};

public updateAgenda = async (req: Request, res: Response) => {
  const agendaId = parseInt(req.params.id);
  const { data } = req.body;

  try {
      const agenda = await this.agendaService.updateAgenda(agendaId, { data });
      if (agenda) {
          res.json(agenda);
      } else {
          res.status(404).json({ error: 'Agenda não encontrada' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar agenda' });
  }
};


}
