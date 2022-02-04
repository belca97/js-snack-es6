let squadre = [
    {
        nome : 'juventus',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'inter',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'milan',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'atalanta',
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : 'sassuolo',
        puntiFatti : 0,
        falliSubiti : 0,
    },
]



    for ( let i = 0; i < squadre.length; i++){
        squadre[i].puntiFatti = squadre[i].puntiFatti + Math.floor(Math.random() * 100 + 1);
        squadre[i].falliSubiti = squadre[i].falliSubiti + Math.floor(Math.random() * 1000 + 1);
    }


console.log(squadre)

function squadreFalli (squad){
    const nuovoArray = [];
    for (let i = 0; i < squad.length; i++){
        let {nome, falliSubiti} = squadre[i];
        nuovoArray.push({nome, falliSubiti});
    }

    return nuovoArray;
}

let squadreFallisubiti = squadreFalli(squadre);
console.log(squadreFallisubiti);


