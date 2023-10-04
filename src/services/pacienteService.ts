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

  public async createPaciente(data: { nome: string, usuario: string, senha: string }) {
    return prisma.paciente.create({
        data,
    });
}

public async deletePaciente(id: number) {
  // Exclua as consultas relacionadas ao paciente primeiro
  await prisma.consulta.deleteMany({
    where: {
      pacienteId: id,
    },
  });

  // Em seguida, exclua o paciente
  const paciente = await prisma.paciente.delete({
    where: {
      id,
    },
  });

  return paciente;
}

public async updatePaciente(id: number, data: { nome: string, usuario: string, senha: string }) {
  return prisma.paciente.update({
      where: { id },
      data,
  });
}

}
