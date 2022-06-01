/*Respondendo ao desafio 2 proposto na página do Instagram do @fabiocberg Fábio Bergmann*/

/*O objetivo do desafio é criar uma função que receba um parâmetro
e retorne o tipo de dado passado com parâmetro*/

function desafio2(a){
    return typeof(a)
}


console.log(desafio2(1));
console.log(desafio2(false));
console.log(desafio2(desafio2));
console.log(desafio2("Hello World"));
console.log(desafio2([1, 2, 3]));