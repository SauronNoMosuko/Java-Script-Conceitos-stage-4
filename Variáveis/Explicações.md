# Variáveis

> Nomes simbólicos para receber algum valor
> Atalhos de código 
> Identificadores
> 3 palavras reservadas para criar uma variável
  * var
  * let
  * const

# O JS é uma linguagem fracamente tipada e dinâmica 

> Variáveis não precisam ter um tipo previamente definido
> Podemos mudar o conteúdo da variável

# Scope

> Escopo determina a visibilidade de alguma variável no JS

# Block statement

```js

// Inicia o bloco
{
// Aqui dentro é um bloco e posso colocar qualquer código
}
//Aqui fechamos o bloco

```
> O bloco, também criará um novo escopo. Chamamos de `block-scoped`

# var

```js

// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco?', x) // Sim só não está definido

{
  var x = 0
}

console.log('> existe x depois do bloco?', x) // Sim

```
# let e const

```js

// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco?', y) // Não

{
  let y = 0
  console.log('> existe y no bloco?', y) // Sim
}

console.log('> existe y depois do bloco?', y) // Não

```

# Para criar nomes de variáveis

> JS é case-sensitive (sensível ao caso)
> JS aceita a cadeia de caracteres Unicode

- Posso:
  
  >> Iniciar com esses caracteres especiais: $ _
  >> Iniciar com letras 
  >> Colocar acentos
  >> Letras maíusculas e minúsculas fazem a diferença

- Não posso:
  
  >> Iniciar com números 
  >> Colocar espaçoz vazios no nome

- Ideal:

  >> Criar nomes que fazem sentido
  >> Que explique o que a variável é ou faz
  >> camelCase
  >> snake_case
  >> Escrever em inglês