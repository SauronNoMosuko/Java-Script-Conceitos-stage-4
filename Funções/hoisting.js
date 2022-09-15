// saymyname()

// function saymyname() {          // funciona o hoisting
//   console.log('Douglas')
// }

saymyname()

const saymyname = function () {       // não funciona o hoisting
  console.log('Douglas')
}