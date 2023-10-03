import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ConsultaService {
  public async getAllConsultas() {
    return prisma.consulta.findMany();
  }

  public async getConsultaById(id: number) {
    return prisma.consulta.findUnique({
      where: { id },
    });
  }

  // Adicione métodos para criar, atualizar e excluir consultas aqui
}
