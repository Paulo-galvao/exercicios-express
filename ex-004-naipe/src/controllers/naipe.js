const db = [];

let lastId = 0;

// if(db.length == 0) {
//     lastId = 0;
// } else {
//     lastId = db[db.length - 1].id;
// }

function model(body, id = lastId++) {
    // body.id = lastId;
    if(body.nome != "" 
        && body.cor  != ""
        && body.nome != undefined
        && body.cor != undefined
    ) {
        return {
            id,
            nome: body.nome,
            cor: body.cor
        }
    } else {
        return undefined;
    }
}

function store(body) {

    const cadastro = model(body, lastId);

    if(cadastro != undefined) {
        db.push(cadastro);
        return 201;
    }

    return 400;
}

function index() {
    return db; // função de leitura que mostra todos os dados;
}

function show(id) {
    return db.find( el => el.id == id); // função de leitura que retorna um item específico;
}

function update(id, body) {
    const index = db.findIndex( el => el.id == id);
    const novo = model(body, parseFloat(id));

    if(index != -1 && novo) {
        db[index] = novo;
        return 200;
    }

    return 400;
}

function destroy(id) {
    const index = db.findIndex(el => el.id == id);

    if(index != -1) {
        db.splice(index, 1);
    }
}

module.exports = {store, index, show, update, destroy};