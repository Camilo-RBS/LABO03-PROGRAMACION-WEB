const countVotes = (votos) => {
    //Code
    let resultado = {}
    votos.forEach((voto) => {
        resultado[voto.candidate] = (resultado[voto.candidate] || 0)+1;
    });
    return resultado;
}

const showResults = (resultado) => {

    //Code
    alert("Resultados de la votacion ->");
    for (let candidate in resultado){
        alert(`${candidate}: ${resultado[candidate]} votos`)
    }

}

const main = () => {
    let votos = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    //Code
    const resutado = countVotes(votos);
    showResults(resutado)
}

main();
