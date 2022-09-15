// Manipulando Strings e Número

// Transformar String em Número e Número em String

let string = '123'
console.log(typeof Number(string))

let number = 321
console.log (typeof String(number))


// Contar quantos caracteres tem uma palavra e qunatos digitos tem um número

let word = "paralelepipedo"
console.log(word.length)

let number2 = 1234
console.log(String(number2).length)

// Transformar um número quebrado com 2 casas decimais e trocar por vírgula

let number3 = 3276363.236782323
console.log(number3.toFixed(2).replace(".", ","))

// Trasforme letras minúsculas em maiúsculas. Faça o contrário disso também

let word2 = "uuuuuuuu"
console.log(word2.toUpperCase()) // toLowerCase()

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "eu quero morrer"
let myarray = phrase.split(" ")
let phraseWothUnderScore = myarray.join("_")
console.log(phraseWothUnderScore.toUpperCase())

// Verificar se um texto contém a palavra Amor

let phrase2 = "eu quero morrer"
console.log(phrase2.includes("amor")) // Ele vê letras maiusculas ou mininusculas

// Criar Array com construtor

let myarray2 = new Array ('a', 'b', 'c')
console.log(myarray2)

// Contar elementos de um array

console.log([
  "a", "b", function() { return "alo"}
][2] ()) // .length

// Transformar uma cadeia de caracateres em elementos de um array

let word3 = "manipulação"
console.log(Array.from(word3))

//Manipuilando arrays
let techs = ["html", "css", "js"]

// * adicionar um item no fim 
techs.push("node.js")
// * adicionar no começo
techs.unshift("sql")
// * remover do fim 
techs.pop()
// * remover do começo
techs.shift()
// * pegar somente alguns elementos do array 
console.log(techs.slice(1, 3))
// * remover 1 ou mais itens em qualquer posição do array 
techs.splice(1, 1)
// * encontrar a posição de um elemento no array 
let index = techs.indexOf("css")
techs.splice (index, 1)

console.log(techs)