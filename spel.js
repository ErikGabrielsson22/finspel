let targetWord = "";
let row = 0;

async function startaSpel() {
    const respons = await fetch('ord.txt');
    const text = await respons.text();
    const ordLista = text.split('\n');
    targetWord = ordLista[Math.floor(Math.random() * ordLista.length)].trim().toUpperCase();
    console.log(targetWord);
}


startaSpel();
