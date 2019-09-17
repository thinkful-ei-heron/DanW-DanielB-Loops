const turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];


const filterMove = turtleMovement.filter(e => e[0] >= 0 && e[1] >= 0)
let posMove = filterMove.map(x => x[0] + x[1])
let howFar = posMove.forEach((x, i) => console.log(`Movement ${i + 1}: ${x}`))

howFar
