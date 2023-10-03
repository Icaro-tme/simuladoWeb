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

  // Adicione métodos para criar, atualizar e excluir secretárias aqui
}
