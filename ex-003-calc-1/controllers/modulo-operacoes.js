function somar(body) {
    return ((+body.n1) + (+body.n2));
}

function subtrair(body) {
    return ((+body.n1) - (+body.n2));
}

function multiplicar(body) {
    return ((+body.n1) * (+body.n2));
}

function dividir(body) {
    return ((+body.n1) / (+body.n2));
}

module.exports = {somar, subtrair, multiplicar, dividir};