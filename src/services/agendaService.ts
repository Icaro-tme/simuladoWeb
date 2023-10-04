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


  public async createAgenda(data: { data: Date }) {
    return prisma.agenda.create({
        data,
    });
}


public async deleteAgenda(id: number) {
  // Exclua as consultas relacionadas à agenda primeiro (se houver uma relação)
  await prisma.consulta.deleteMany({
    where: {
      agendaId: id,
    },
  });

  // Em seguida, exclua a agenda
  const agenda = await prisma.agenda.delete({
    where: {
      id,
    },
  });

  return agenda;
}

public async updateAgenda(id: number, data: { data: Date }) {
  return prisma.agenda.update({
      where: { id },
      data,
  });
}

}
