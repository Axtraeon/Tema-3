let matriz = [[1,2,3],[4,5,6],[7,8,9]];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++){
        if (i == j) {
            console.log(matriz[i][j])    
        }
    }       
}

function transponer(matriz){ //Cambiar las filas por las columnas
    let matriz2 = [];
    for (let i = 0; i < matriz.length; i++){   
        matriz2[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
            matriz2[i].push(matriz[j][i])
        }
    }  
    return matriz2;
}

console.log(transponer(matriz));

//Vamos a hacer una funcion que devuelva los elementos repetidos que hay.
//[2,3,2,2] --> [3,1]

let matrizRepetidos = [2,3,2,2]

function repetidos(matrizRepetidos) {
    let vistos = [];
    let resultado = [];
  
    matrizRepetidos.forEach(elemento => { //elemento sera el numero actual que estamos procesando
      // Si el elemento ya ha sido visto, no lo añadimos de nuevo
      if (!vistos.find(elementfd => elementfd === elemento)) {
        /**
        - vistos.find(elementfd => elementfd === elemento) busca en el array vistos si hay algún elemento (elementfd) que sea igual (===) al elemento actual.

        - Si find encuentra un elemento, retorna ese elemento.

        - El operador ! (negación) delante de vistos.find(elementfd => elementfd === elemento) convierte el resultado en true si find NO encuentra ningún "elemento" (es decir, si el elemento no ha sido procesado antes).
         */
        let contador = matrizRepetidos.filter(elementft => elementft === elemento).length; // Contamos cuántas veces aparece
        resultado.push(contador); // Añadimos el número de repeticiones
        vistos.push(elemento); // Marcamos que este número ya lo hemos procesado
      }
    });
  
    return resultado;
  }
  
  let final = repetidos(matrizRepetidos);
  console.log(final); // [1, 3]

//Ejemplo find:

let array1 = [2,5,68,12]

let mayorQue = array1.find (elemento => elemento > 5);

console.log(mayorQue); //Esto devolvera 68, porque es el primer elemento que cumple la condicion

//Ejemplo de filter:

let array2 = [2,55,63,99]

let matrizCondicion = array2.filter(elemento => elemento > 10).length; //Esto nos devuelve 3

console.log(matrizCondicion); //Esto te devuelve [55, 63, 99] (Sin el .lenght) porque esos valores son mayores que 10

