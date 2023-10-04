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

  public createPaciente = async (req: Request, res: Response) => {
    const { nome, usuario, senha } = req.body;

    try {
        const paciente = await this.pacienteService.createPaciente({ nome, usuario, senha });
        res.status(201).json(paciente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar paciente' });
    }
};


public deletePaciente = async (req: Request, res: Response) => {
  const pacienteId = parseInt(req.params.id);

  try {
      const paciente = await this.pacienteService.deletePaciente(pacienteId);
      
      if (paciente) {
          res.json(paciente);
      } else {
          res.status(404).json({ error: 'Paciente não encontrado' });
      }
  } catch (error) {
    console.error('Erro ao deletar paciente:', error); // Registre o erro para fins de depuração.
    res.status(500).json({ error: 'Erro ao deletar paciente' });
}
};

public updatePaciente = async (req: Request, res: Response) => {
  const pacienteId = parseInt(req.params.id);
  const { nome, usuario, senha } = req.body;

  try {
      const paciente = await this.pacienteService.updatePaciente(pacienteId, { nome, usuario, senha });
      if (paciente) {
          res.json(paciente);
      } else {
          res.status(404).json({ error: 'Paciente não encontrado' });
      }
  } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar paciente' });
  }
};


}
