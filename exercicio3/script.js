const A = 5 > 20 && 5 < 2
console.log(A);

const B = 5 === 5 || 5 === '5'
console.log(B);

const C = 20 > 50 
console.log(!C);

const D = 20 > 50 || 50 > 60
console.log(!D);

// ----------------------------------------------------------------------------------------------------------

// PARTE 2 //

// Na aula passada começamos a implementar um sistema para o RH de uma empresa. 

// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 
// e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, 
// mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

//---------------------------//-------------------//------------------------//--------------------------------//

// Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

// a) Auxílio creche por filho:  R$45,50

// b) Comissão de 10% sobre o total de vendas mensal

// c) Total de vendas dos meses de janeiro a junho:

//     - Janeiro: R$ 5.784,50
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00

// d)  Desconto do INSS 5% do salário

//-----------------------------//-----------------------------//-----------------------------//-----------------------//

// Calcule:


// 1) O salário fixo mais o auxílio creche
let salFixoComCreche = (2000 + (45.50 * 2))
console.log(salFixoComCreche);

// 2) Quanto Fulano de Silva receberá de comissão em janeiro 
// (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
let comissaoJaneiro = 5784.50 * 0.1
console.log(comissaoJaneiro);

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS 
// (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
let salarioDescontado = ((2000 + comissaoJaneiro) - (2000 * 0.05))
console.log(salarioDescontado);

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

let salarioDescontadoINSS = 2000 * 0.05

let janeiro = ((salFixoComCreche + comissaoJaneiro) - salarioDescontadoINSS)
console.log("Salário de Janeiro", janeiro);

let fevereiro = ((salFixoComCreche + (3418.41 * 0.1) - salarioDescontadoINSS))
console.log("Salário de Fevereiro", fevereiro);

let marco = ((salFixoComCreche + (4124.10 * 0.1) - salarioDescontadoINSS))
console.log("Salário de Março", marco);

let abril = ((salFixoComCreche + (1874.00 * 0.1) - salarioDescontadoINSS))
console.log("Salário de Abril", abril);

let maio = ((salFixoComCreche + (7000 * 0.1) - salarioDescontadoINSS))
console.log("Salário de Maio", maio);

let junho = ((salFixoComCreche + (9450 * 0.1) - salarioDescontadoINSS))
console.log("Salário de Junho", junho);

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
// (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por
// exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

let somaParaMedia = ((salFixoComCreche + comissaoJaneiro) + (salFixoComCreche + (3418.41 * 0.1)) + (salFixoComCreche + (4124.10 * 0.1)) + (salFixoComCreche + (1874.00 * 0.1)) + (salFixoComCreche + (7000 * 0.1)) + (salFixoComCreche + (9450 * 0.1)))

let media = somaParaMedia / 6 
console.log(media);


