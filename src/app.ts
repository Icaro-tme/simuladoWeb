import express from 'express';
import pacienteRoutes from './routes/pacienteRoutes';
// Importe outras rotas aqui

const app = express();
const port = 3000;

app.use(express.json());

app.use('/pacientes', pacienteRoutes);
// Use outras rotas aqui

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
