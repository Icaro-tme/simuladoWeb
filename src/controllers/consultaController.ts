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

  public createConsulta = async (req: Request, res: Response) => {
    const { data, dentista, pacienteId, secretariaId, agendaId } = req.body;

    try {
        const consulta = await this.consultaService.createConsulta({
            data,
            dentista,
            pacienteId,
            secretariaId,
            agendaId
        });
        res.status(201).json(consulta);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar consulta' });
    }
  };

  public deleteConsulta = async (req: Request, res: Response) => {
    const consultaId = parseInt(req.params.id);

    try {
        const consulta = await this.consultaService.deleteConsulta(consultaId);
        if (consulta) {
            res.json(consulta);
        } else {
            res.status(404).json({ error: 'Consulta não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar consulta' });
    }
  };

  public updateConsulta = async (req: Request, res: Response) => {
    const consultaId = parseInt(req.params.id);
    const { data, dentista, pacienteId, secretariaId, agendaId } = req.body;

    try {
        const consulta = await this.consultaService.updateConsulta(consultaId, {
            data,
            dentista,
            pacienteId,
            secretariaId,
            agendaId
        });
        if (consulta) {
            res.json(consulta);
        } else {
            res.status(404).json({ error: 'Consulta não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar consulta' });
    }
  };

}
