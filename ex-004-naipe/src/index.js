const express = require('express');
const app = express();
const porta = 3000;

const naipeController = require('./controllers/naipe.js');

app.use(express.json());

app.get('/naipe', (req, res) => 
    {
        const content = naipeController.index();
        res.json(content);
    }
);

app.get('/naipe/:id', (req, res) => 
    {
        const content = naipeController.show(req.params.id);
        res.json(content);
    }
);

app.post('/naipe', (req, res) => {
    const code = naipeController.store(req.body);
    res.status(code).json();
});

app.put('naipe/:id', (req, res) => {
    const code = naipeController.update(req.params.id, req.body);
    res.status(code).json();
});

app.delete('naipe/:id', (req, res) => {
    const code = naipeController.destroy(req.params.id);
    res.status(code).json();
});

app.listen(porta, () => {
    console.log(`Servidor ativo na porta: ${porta}`);
});