console.log("Fila")
let banco = ["Sofia", "David", "Juan"]
console.log(banco)


console.log("entran 2, sale 1")
banco.push("Sara", "Agustin")
banco.splice(0,1)
console.log(banco)


console.log("entran 2")
banco.splice(1,0, "Renata")
banco.push("Elena")
console.log(banco)