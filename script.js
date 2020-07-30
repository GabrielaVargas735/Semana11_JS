// Primera Parte
// La función Math.random() retorna un número aleatorio entre 0 y 1 (excluyendo el 1).
// Si se quiere un entero aleatorio entre dos números min y max (excluyendo max), puede usarse
// el siguiente cálculo:
// Math.floor(Math.random() * (max - min) + min)
// Con esta información, escriba una función que retorne un string que tenga el siguiente
// formato:
// rgb(X, Y, Z)
// Donde X, Y y Z son números aleatorios entre 0 y 255 (incluyendo 255).
// Segunda Parte 
// Una vez creada la función, utilícela para escribir un programa que asigne al texto de cada
// párrafo de un documento HTML un color aleatorio.

function rgb(){
    let red = Math.floor(Math.random() * (255 - 0) + 0);
    let green = Math.floor(Math.random() * (255 - 0) + 0);
    let blue = Math.floor(Math.random() * (255 - 0) + 0);
    return(red, green, blue);
}
let x = document.querySelectorAll('.mainContainer p');

for(let g = 0; g < x.length; g++){
    x[g].style.color = rgb()
}
console.log(rgb());
