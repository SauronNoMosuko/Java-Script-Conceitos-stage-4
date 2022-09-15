function saymyname (name) {
  console.log("antes da callback")
  
  name()
  
  console.log("depois da callback")
}

saymyname(
  () => {
    console.log('estou em uma callback')
  }
)