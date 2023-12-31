"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PacienteService {
    getAllPacientes() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.paciente.findMany();
        });
    }
    getPacienteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.paciente.findUnique({
                where: { id },
            });
        });
    }
    createPaciente(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.paciente.create({
                data,
            });
        });
    }
    deletePaciente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Exclua as consultas relacionadas ao paciente primeiro
            yield prisma.consulta.deleteMany({
                where: {
                    pacienteId: id,
                },
            });
            // Em seguida, exclua o paciente
            const paciente = yield prisma.paciente.delete({
                where: {
                    id,
                },
            });
            return paciente;
        });
    }
    updatePaciente(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.paciente.update({
                where: { id },
                data,
            });
        });
    }
}
exports.PacienteService = PacienteService;
