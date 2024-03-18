function ex1(){
    // Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.
    let n1 = parseFloat(prompt("Digite um número: "));
    let n2 = parseFloat(prompt("Digite outro número: "));
    

    if(n1 > n2){
        alert("O maior número é: " + n1)
    } else if(n2 > n1){
        alert("O maior número é: " + n2)
    } else if (n1 == n2) {
        alert("O maior número é:" + n1)
    } 
}

function ex2(){
    //Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

    let n = parseInt(prompt("Informe um valor: "));
    
    if(n > 0){
        alert("O valor: " + n + " É positivo.")
    } else if( n < 0){
        alert("O valor: " + n + " É negativo.")
    } else if( n == 0){
        alert("O valor é 0.")
    }
}

function ex3(){
    // Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

    let n1 = parseFloat(prompt("Digite um número: "));
    let n2 = parseFloat(prompt("Digite outro número: "));
    let n3 = parseFloat(prompt("Digite outro número: "));

    if(n1 > n2 && n1 > n3){
        alert("O maior número é: " + n1)
    } else if(n2 > n1 && n2 > n3){
        alert("O maior número é: " + n2)
    } else if(n3 > n1 && n3 > n2){
        alert("O maior número é: " + n3);
    }   
}

function ex4(){
    //Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

    let n1 = parseFloat(prompt("Digite um número: "));
    let n2 = parseFloat(prompt("Digite outro número: "));
    let n3 = parseFloat(prompt("Digite outro número: "));

   if(n1 > n3 && n2> n3){
    alert("A soma dos maiores valores é igual a:" + (n1+n2))
   } else if(n1 > n2 && n3 > n2) {
    alert("A soma dos maiores valores é igual a: " + (n1+n3))
   } else {
    alert("A soma dos maiores valores é igual a: " + (n2+n3))
   }
   //   n1 e n2      n2 e n3        n3 e n1
} 

function ex5(){
    //Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

    let n1 = parseInt(prompt("Informe um número: "));
    let n2 = parseInt(prompt("Informe um número: "));
    let n3 = parseInt(prompt("Informe um número: "));
    let n4 = parseInt(prompt("Informe um número: "));
    let n5 = parseInt(prompt("Informe um número: "));
    let n6 = parseInt(prompt("Informe um número: "));
    let media = (n1+n2+n3+n4+n5+n6) / 6;

    alert("Os valores informados são: " +"\n"+ n1 +"\n"+ n2 +"\n"+ n3 +"\n"+ n4 +"\n"+ n5 +"\n"+ n6+"\n" +"\n" + "A media desses ns são: " + media);
}

function ex6(){
    //Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

    let n1 = parseInt(prompt("Informe um número: "));
    let n2 = parseInt(prompt("Informe um número: "));
    let n3 = parseInt(prompt("Informe um número: "));
    let n4 = parseInt(prompt("Informe um número: "));
    let maior = n1;

    if(n2 > maior){
        maior = n2
    }
    if( n3 > maior){
        maior = n3
    }
    if ( n4 > maior){
        maior = n4
    }

    alert("O primeiro valor é: " + n1 + " O último valor é: " + n4 + " E o maior valor é: " + maior)
}

function ex7(){

let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
let n3 = parseFloat(prompt("Digite o terceiro número:"));
let n4 = parseFloat(prompt("Digite o quarto número:"));
let n5 = parseFloat(prompt("Digite o quinto número:"));
let n6 = parseFloat(prompt("Digite o sexto número:"));

let somaMenor72 = 0;
if (n1 < 72) somaMenor72 += n1;
if (n2 < 72) somaMenor72 += n2;
if (n3 < 72) somaMenor72 += n3;
if (n4 < 72) somaMenor72 += n4;
if (n5 < 72) somaMenor72 += n5;
if (n6 < 72) somaMenor72 += n6;

alert("A soma dos números inferiores a 72 é: " + somaMenor72);
alert("Números informados pelo usuário: " + n1 + ", " + n2 + ", " + n3 + ", " + n4 + ", " + n5 + ", " + n6);
}

function ex8(){
    //Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

    let n1 = parseInt(prompt("Informe o primeiro número: "));
    let n2 = parseInt(prompt("Informe o segundo número: "));
    let n3 = parseInt(prompt("Informe o terceiro número: "));
    let n4 = parseInt(prompt("Informe o quarto número: "));

    if (n1 >= 0 && n1 <= 10 &&
        n2 >= 0 && n2 <= 10 &&
        n3 >= 0 && n3 <= 10 &&
        n4 >= 0 && n4 <= 10) {

        var media = (n1+n2+n3+n4) / 4;
    }
        if (media > 5) {
            alert("Você passou no teste!")
        } else {
            alert("Tente novamente")
        }
}

function ex9(){
    // Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

    let anoNascimento = parseInt(prompt("Em qual ano você nasceu? "));

    if(anoNascimento <= 2006){
        alert("Você poderá votar este ano.")
    } else{
        alert("Você não poderá votar este ano.")
    }
   
}

function ex10(){
    //Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

    let altura =  parseFloat(prompt("Informe sua altura(Ex: 1.70): "))
    let sexo = parseInt(prompt("Digite o seu sexo(sendo 1 = feminino e 2 = masculino: "))

    var pesoIdeal;
    if( sexo === 1){
        pesoIdeal = 62.1 * altura - 44.7;
        alert("Seu peso ideal é: " + pesoIdeal)
        } else if( sexo === 2){
            pesoIdeal = 72.7 * altura - 58;
            alert("Seu peso ideal é: " + pesoIdeal)
        } else {
            alert("Opção de sexo inválida.");
        }
}

function ex11(){
    //Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
    // O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 
    // Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações

    let v1 = parseInt(prompt("Informe o primeiro valor: "))
    let v2 = parseInt(prompt("Informe o segundo valor: "))

    let operador = parseInt(prompt("Qual operador deseja utilizar?\n1-Adição\n2-Subtração\n3-Divisão\n4-Multiplicação"));
    let resultado;
    if(operador == 1) {
        resultado = v1 + v2;
    }
    if(operador == 2){
        resultado = v1 - v2;
    }
    if(operador == 3){
        resultado = v1 / v2;
    }
    if(operador == 4){
        resultado = v1 * v2;
    }

    alert("O resultado é " + resultado);
    
}