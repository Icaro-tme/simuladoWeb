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
exports.AgendaController = void 0;
const agendaService_1 = require("../services/agendaService");
class AgendaController {
    constructor() {
        this.getAllAgendas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const agendas = yield this.agendaService.getAllAgendas();
                res.json(agendas);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao buscar agendas' });
            }
        });
        this.getAgendaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const agendaId = parseInt(req.params.id);
            try {
                const agenda = yield this.agendaService.getAgendaById(agendaId);
                if (agenda) {
                    res.json(agenda);
                }
                else {
                    res.status(404).json({ error: 'Agenda não encontrada' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao buscar agenda' });
            }
        });
        this.createAgenda = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { data } = req.body;
            try {
                const agenda = yield this.agendaService.createAgenda({ data });
                res.status(201).json(agenda);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao criar agenda' });
            }
        });
        this.deleteAgenda = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const agendaId = parseInt(req.params.id);
            try {
                const agenda = yield this.agendaService.deleteAgenda(agendaId);
                if (agenda) {
                    res.json(agenda);
                }
                else {
                    res.status(404).json({ error: 'Agenda não encontrada' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao excluir agenda' });
            }
        });
        this.updateAgenda = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const agendaId = parseInt(req.params.id);
            const { data } = req.body;
            try {
                const agenda = yield this.agendaService.updateAgenda(agendaId, { data });
                if (agenda) {
                    res.json(agenda);
                }
                else {
                    res.status(404).json({ error: 'Agenda não encontrada' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao atualizar agenda' });
            }
        });
        this.agendaService = new agendaService_1.AgendaService();
    }
}
exports.AgendaController = AgendaController;
