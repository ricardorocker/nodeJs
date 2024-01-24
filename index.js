const express = require("express");

const server = express();

server.use(express.json());

// Query params = ?node=NodeJS
// Route params = /curso/1
// Request Body = { nome: 'Nodejs', tipo: 'Backend'}

// CRUD> Create, Read, Update, Delete

const cursos = ["Node JS", "Javascript", "React Native"];

server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

// localhost:3000/curso
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

// Criando um novo curso
server.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

// Atualizando um curso
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// Excluindo alguma curso
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.json({message: "Curso deletado com sucesso"});
//   return res.send();
});

server.listen(3000);
