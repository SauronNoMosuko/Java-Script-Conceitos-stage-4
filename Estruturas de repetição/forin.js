let person = {
  name: 'jhon',
  age: 30,
  weight: 88,
}

for(let property in person) {
  console.log( property)
  console.log(person[property])
}