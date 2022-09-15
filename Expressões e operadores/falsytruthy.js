/*

  FALSY
    Quando um valor é considerado false em contextoos onde um booleano é obrigatório (condicionais e loops)
    
    * false
    * 0
    * -0
    * ""
    * null
    * undefined
    * NaN

*/

console.log( false ? 'verdadeiro' : 'falso' )

/*

  TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório 
    (condicionais e loops)

    * True
    * {}
    * []
    * 1
    * 3.23
    * "0"
    * "false"
    * -1
    * Infinity
    * -Infinity

*/

console.log( true ? 'verdadeiro' : 'falso' )