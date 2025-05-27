const numeros=[500, 200, 3000, 10000, 250, 50]
let mayor=numeros[0]

for(let i=1; i < numeros.length; i++){
    if(numeros[i]>mayor){
        mayor=numeros[i];
    }
}

console.log("El numero mayor es: " + mayor);
