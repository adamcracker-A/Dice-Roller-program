// Roller Dice program

function RolleDice(){
    const numOfdice = document.getElementById('nD').value;
    const diceresult = document.getElementById('diceresult');
    const diceimages = document.getElementById('diceimages');
    const values = [];
    const images = [];

    for(let i=0 ; i<numOfdice; i++){
        const value = Math.floor((Math.random() * 6) + 1);
        values.push(value);
        images.push(`<img src="Dice-${value}-b.svg.png">`);
    }
    diceresult.textContent = values.join(', ');
    diceimages.innerHTML = images.join('');
}