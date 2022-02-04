// creo l'array contenente gli oggetti con le informazioni delle bici

let bici = [
    {
        nome : 'bici da corsa',
        peso : 10,
    },
    {
        nome : 'bici da passeggio',
        peso : 20,
    },
    {
        nome : 'bici da montagna',
        peso : 40,
    },
    {
        nome : 'bici con la batteria',
        peso : 60,
    },
    {
        nome : 'graziella',
        peso : 5,
    },
]

const {peso} = bici;

for(i=0; i<bici.length; i++){
    if(bici.peso < 6)
    alert('La bici più leggera è la graziella' )
}
