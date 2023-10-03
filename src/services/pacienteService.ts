import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PacienteService {
  public async getAllPacientes() {
    return prisma.paciente.findMany();
  }

  public async getPacienteById(id: number) {
    return prisma.paciente.findUnique({
      where: { id },
    });
  }

  // Adicione métodos para criar, atualizar e excluir pacientes aqui
}
