const express = require('express');
const app = express();
const porta = 3000;

app.get('/main-route', (req, res) => {
    res.send("<h1>Bem Vindo a rota principal</h1>");
});

app.get('/sec-route/:nome/:idade/:curso', (req, res) => {
    const par = req.params;
    res.send(`ola ${par.nome} de ${par.idade} anos seja bem-vindo ao curso de ${par.curso}`);
});

app.listen(porta, () => {
    console.log(`Exercicio rodando na porta ${porta}`);
});