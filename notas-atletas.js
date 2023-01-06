let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

for (let i = 0; i < atletas.length; i++) {
  let atleta = atletas[i].nome
  let n1 = atletas[i].notas
  let nc = n1
  let n2 = 0
  n1 = n1.sort()
  n1 = n1.toString();
  nc = nc.slice(1,4)
  nc.forEach(function(v1){

 return n2 = n2+v1
  });
  n2 = n2 / nc.length

  
console.log("Atleta: " + atleta + "\nNotas Obtidas: " + n1 + "\nMédia Válida: " + n2)

 
}
