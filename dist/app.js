"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pacienteRoutes_1 = __importDefault(require("./routes/pacienteRoutes"));
// Importe outras rotas aqui
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/pacientes', pacienteRoutes_1.default);
// Use outras rotas aqui
app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
});
