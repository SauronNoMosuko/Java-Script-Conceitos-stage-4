// let expression = "c"

// switch (expression) {
//   case 'a':
//     //código
//     console.log("a")
//     break
//   case 'b':
//     //codigo
//     console.log("b")
//     break
//   default:
//     //codigo
//     console.log("default")
//     break
// }


//calculadora simples

function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
      case '+':
          result = number1 + number2
          break
      case '-':
          result = number1 - number2 
          break
      case '*':
          result = number1 * number2
          break
      case '/':
          result = number1 / number2 
          break
      default:
          console.log('não implementado')
          break
  }

  return result
}

console.log(calculate(4, '+', 8))