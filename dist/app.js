"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pacienteRoutes_1 = __importDefault(require("./routes/pacienteRoutes"));
const consultaRoutes_1 = __importDefault(require("./routes/consultaRoutes"));
const secretariaRoutes_1 = __importDefault(require("./routes/secretariaRoutes"));
const agendaRoutes_1 = __importDefault(require("./routes/agendaRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/pacientes', pacienteRoutes_1.default);
app.use('/consultas', consultaRoutes_1.default);
app.use('/secretarias', secretariaRoutes_1.default);
app.use('/agendas', agendaRoutes_1.default);
app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
});
