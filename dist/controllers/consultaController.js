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
exports.ConsultaController = void 0;
const consultaService_1 = require("../services/consultaService");
class ConsultaController {
    constructor() {
        this.getAllConsultas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const consultas = yield this.consultaService.getAllConsultas();
                res.json(consultas);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao buscar consultas' });
            }
        });
        this.getConsultaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const consultaId = parseInt(req.params.id);
            try {
                const consulta = yield this.consultaService.getConsultaById(consultaId);
                if (consulta) {
                    res.json(consulta);
                }
                else {
                    res.status(404).json({ error: 'Consulta não encontrada' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao buscar consulta' });
            }
        });
        this.createConsulta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { data, dentista, pacienteId, secretariaId, agendaId } = req.body;
            try {
                const consulta = yield this.consultaService.createConsulta({
                    data,
                    dentista,
                    pacienteId,
                    secretariaId,
                    agendaId
                });
                res.status(201).json(consulta);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao criar consulta' });
            }
        });
        this.deleteConsulta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const consultaId = parseInt(req.params.id);
            try {
                const consulta = yield this.consultaService.deleteConsulta(consultaId);
                if (consulta) {
                    res.json(consulta);
                }
                else {
                    res.status(404).json({ error: 'Consulta não encontrada' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao deletar consulta' });
            }
        });
        this.updateConsulta = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const consultaId = parseInt(req.params.id);
            const { data, dentista, pacienteId, secretariaId, agendaId } = req.body;
            try {
                const consulta = yield this.consultaService.updateConsulta(consultaId, {
                    data,
                    dentista,
                    pacienteId,
                    secretariaId,
                    agendaId
                });
                if (consulta) {
                    res.json(consulta);
                }
                else {
                    res.status(404).json({ error: 'Consulta não encontrada' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao atualizar consulta' });
            }
        });
        this.consultaService = new consultaService_1.ConsultaService();
    }
}
exports.ConsultaController = ConsultaController;
