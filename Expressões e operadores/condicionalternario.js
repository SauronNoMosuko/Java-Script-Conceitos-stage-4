// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se nao valor 2
// condition ? value1 : value2

// Exemplos

// Café da manhã top
let pao = true
let queijo = true

const niceBreakFast = pao && queijo ? 'café top' : 'café ruim'
const niceBreakFast2 = pao || queijo ? 'café top' : 'café ruim'

console.log(niceBreakFast)
console.log(niceBreakFast2)

// Maior de 18
let age = 16
const cabDdrive = age >= 18 ? 'can drive ' : 'cantdrive'
console.log(cabDdrive)
