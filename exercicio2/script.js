let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número: "))

let divisaoDoPimeiro = numero1 % numero2 
let divisaoDoSegundo = numero2 % numero1

let sePrimeiroForIgualZero = (divisaoDoPimeiro === 0)
let seSegundoForIgualZero = (divisaoDoSegundo === 0)

console.log("O primeiro número é maior que o segundo?", numero1 > numero2);
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2);
console.log("O primeiro numero é divisível pelo segundo?", sePrimeiroForIgualZero);
console.log("O segundo numero é divisível pelo primeiro?", seSegundoForIgualZero);
