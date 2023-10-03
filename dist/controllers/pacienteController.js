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
exports.PacienteController = void 0;
const pacienteService_1 = require("../services/pacienteService");
class PacienteController {
    constructor() {
        this.getAllPacientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const pacientes = yield this.pacienteService.getAllPacientes();
                res.json(pacientes);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao buscar pacientes' });
            }
        });
        this.getPacienteById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pacienteId = parseInt(req.params.id);
            try {
                const paciente = yield this.pacienteService.getPacienteById(pacienteId);
                if (paciente) {
                    res.json(paciente);
                }
                else {
                    res.status(404).json({ error: 'Paciente não encontrado' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao buscar paciente' });
            }
        });
        this.pacienteService = new pacienteService_1.PacienteService();
    }
}
exports.PacienteController = PacienteController;
