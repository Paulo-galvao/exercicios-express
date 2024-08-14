const express = require('express');
const app = express();
const porta = 3000;

// req = requisição (do cliente);
// res = resposta (do servidor);

app.get('/segunda-rota', (req, res) => {
    res.send('<button onclick="alert()">me aperta</button>');
});

app.get('/prime-day/:produto', (req, res) => {
    req.params;
    res.send(req.params);
});

app.listen( porta, () => {
    console.log(`O servidor está ativo na porta ${porta}`);
});