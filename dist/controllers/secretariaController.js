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
exports.SecretariaController = void 0;
const secretariaService_1 = require("../services/secretariaService");
class SecretariaController {
    constructor() {
        this.getAllSecretarias = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const secretarias = yield this.secretariaService.getAllSecretarias();
                res.json(secretarias);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao buscar secretárias' });
            }
        });
        this.getSecretariaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const secretariaId = parseInt(req.params.id);
            try {
                const secretaria = yield this.secretariaService.getSecretariaById(secretariaId);
                if (secretaria) {
                    res.json(secretaria);
                }
                else {
                    res.status(404).json({ error: 'Secretaria não encontrada' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao buscar secretaria' });
            }
        });
        this.createSecretaria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { nome, RG } = req.body;
            try {
                const secretaria = yield this.secretariaService.createSecretaria({ nome, RG });
                res.status(201).json(secretaria);
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao criar secretaria' });
            }
        });
        this.deleteSecretaria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const secretariaId = parseInt(req.params.id);
            try {
                const secretaria = yield this.secretariaService.deleteSecretaria(secretariaId);
                if (secretaria) {
                    res.json(secretaria);
                }
                else {
                    res.status(404).json({ error: 'Secretaria não encontrada' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao deletar secretaria' });
            }
        });
        this.updateSecretaria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const secretariaId = parseInt(req.params.id);
            const { nome, RG } = req.body;
            try {
                const secretaria = yield this.secretariaService.updateSecretaria(secretariaId, { nome, RG });
                if (secretaria) {
                    res.json(secretaria);
                }
                else {
                    res.status(404).json({ error: 'Secretaria não encontrada' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Erro ao atualizar secretaria' });
            }
        });
        this.secretariaService = new secretariaService_1.SecretariaService();
    }
}
exports.SecretariaController = SecretariaController;
