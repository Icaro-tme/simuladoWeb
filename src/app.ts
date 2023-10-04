import express from 'express';
import pacienteRoutes from './routes/pacienteRoutes';
import consultaRoutes from './routes/consultaRoutes';
import secretariaRoutes from './routes/secretariaRoutes';
import agendaRoutes from './routes/agendaRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/pacientes', pacienteRoutes);
app.use('/consultas', consultaRoutes);
app.use('/secretarias', secretariaRoutes);
app.use('/agendas', agendaRoutes);



app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
