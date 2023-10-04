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

  public async createConsulta(data: {
    data: Date,
    dentista: string,
    pacienteId: number,
    secretariaId: number,
    agendaId?: number
}) {
    return prisma.consulta.create({
        data,
    });
}

public async deleteConsulta(id: number) {
  return prisma.consulta.delete({
      where: { id },
  });
}

public async updateConsulta(id: number, data: {
  data: Date,
  dentista: string,
  pacienteId: number,
  secretariaId: number,
  agendaId?: number
}) {
  return prisma.consulta.update({
      where: { id },
      data,
  });

}

}
