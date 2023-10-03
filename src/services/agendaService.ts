import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AgendaService {
  public async getAllAgendas() {
    return prisma.agenda.findMany();
  }

  public async getAgendaById(id: number) {
    return prisma.agenda.findUnique({
      where: { id },
    });
  }

  // Adicione métodos para criar, atualizar e excluir agendas aqui
}
