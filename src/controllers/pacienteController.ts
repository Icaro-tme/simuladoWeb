import { Request, Response } from 'express';
import { PacienteService } from '../services/pacienteService';

export class PacienteController {
  private pacienteService: PacienteService;

  constructor() {
    this.pacienteService = new PacienteService();
  }

  public getAllPacientes = async (req: Request, res: Response) => {
    try {
      const pacientes = await this.pacienteService.getAllPacientes();
      res.json(pacientes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pacientes' });
    }
  };

  public getPacienteById = async (req: Request, res: Response) => {
    const pacienteId = parseInt(req.params.id);

    try {
      const paciente = await this.pacienteService.getPacienteById(pacienteId);
      if (paciente) {
        res.json(paciente);
      } else {
        res.status(404).json({ error: 'Paciente não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar paciente' });
    }
  };

  //métodos
}
