# simuladoWeb

## Comandos de instalação e inicialização do TypeScript:

> ```npm init -y```
> 
> ```npm install typescript --save-dev```
> 
> ```npx tsc -init```

## Instalando dependências do Prisma

> ```npm install express --save```
> 
> ```npm i --save-dev @types/express```
> 
> ```npm install prisma --save-dev```
> 
> ```npx prisma init --datasource-provider sqlite```
>
> ```npx prisma migrate dev --name init```

## Comandos de teste de API

```
curl -X POST http://localhost:3000/pacientes \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Nome do Paciente",
    "usuario": "nomeusuario",
    "senha": "senhadopaciente"
  }'


curl -X POST http://localhost:3000/secretarias \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Nome da Secretaria",
    "RG": "123456789"
  }'

curl -X POST http://localhost:3000/agendas \
  -H "Content-Type: application/json" \
  -d '{
    "data": "2023-10-10T14:30:00.000Z"
  }'


curl -X POST http://localhost:3000/consultas \
  -H "Content-Type: application/json" \
  -d '{
    "data": "2023-10-10T14:30:00.000Z",
    "dentista": "Dr. Dentistonio",
    "pacienteId": 1,
    "secretariaId": 1,
    "agendaId": 1
  }'
```
