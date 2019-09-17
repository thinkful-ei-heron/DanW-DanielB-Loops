let movement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let positiveMovements = movement.filter(el => el[0] >= 0 && el[1] >= 0);

positiveMovements.forEach(el => console.log(el));

let totalMovements = movement.map(el => el[0] + el[1]);

totalMovements.forEach((el, i) => console.log(`Movement #${i}: ${el} steps`));

let words = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'.split(
  ' '
);

let decoded = words.reduce((acc, el) => {
  console.log(acc);
  if (el.length === 3) return (acc += ' ');
  else return (acc += el.slice(-1));
}, (str = ''));

console.log(decoded);
