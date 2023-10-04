import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class SecretariaService {
  public async getAllSecretarias() {
    return prisma.secretaria.findMany();
  }

  public async getSecretariaById(id: number) {
    return prisma.secretaria.findUnique({
      where: { id },
    });
  }

  public async createSecretaria(data: { nome: string, RG: string }) {
    return prisma.secretaria.create({
        data,
    });
}

public async deleteSecretaria(id: number) {
  // Exclua as consultas relacionadas à secretaria primeiro (se houver uma relação)
  await prisma.consulta.deleteMany({
    where: {
      secretariaId: id,
    },
  });

  // Em seguida, exclua a secretaria
  const secretaria = await prisma.secretaria.delete({
    where: {
      id,
    },
  });

  return secretaria;
}

public async updateSecretaria(id: number, data: { nome: string, RG: string }) {
  return prisma.secretaria.update({
      where: { id },
      data,
  });
}

}
