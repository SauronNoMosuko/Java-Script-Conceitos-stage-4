function person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}

const douglas = new person("douglas")
const joao = new person ("joao")

console.log(douglas.walk())
console.log(joao.walk())