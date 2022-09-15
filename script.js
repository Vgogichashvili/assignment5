const game = {
 team1: 'Bayern Munich',
 team2: 'Borrussia Dortmund',
 players: [
 [
 'Neuer',
 'Pavard',
 'Martinez',
 'Alaba',
 'Davies',
 'Kimmich',
 'Goretzka',
 'Coman',
 'Muller',
 'Gnarby',
 'Lewandowski',
 ],
 [
 'Burki',
 'Schulz',
 'Hummels',
 'Akanji',
 'Hakimi',
 'Weigl',
 'Witsel',
 'Hazard',
 'Brandt',
 'Sancho',
 'Gotze',
 ],
 ],
 score: '4:0',
 scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
 'Hummels'],
 date: 'Nov 9th, 2037',
 odds: {
 team1: 1.33,
 x: 3.25,
 team2: 6.5,
 }
}


for(let i=0; i <game.scored.length; i++){
    console.log(`Goal ${i+1} :`,game.scored[i])
}

console.log("\n")

function calcAvarage(odds){
    let sum = 0;
    for (let i = 0; i < odds.length; i++) {
    sum += odds[i];
}
    return sum/odds.length;
}


var oddsValues = Object.values(game.odds);
var avarageOdds = calcAvarage(oddsValues);
console.log(`Avarage odd : ${avarageOdds}`,"\n");


console.log(`Odd of victory ${game.team1} : ${oddsValues[0]}`);
console.log(`Odd of draw : ${oddsValues[1]}`);
console.log(`Odd of victory ${game.team2} : ${oddsValues[2]}`)



var map = game.scored.reduce(function(obj, a) {
  obj[a] = ++obj[a] || 1;
  return obj;
},{});

console.log(map);



