const btn = document.querySelector("#my-button")

btn.addEventListener("click", function () {
    console.log("Clicou!")
})

// Test
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}
secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");
thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

const title = document.querySelector("#my-title");

title.addEventListener("click", (event) =>{
  // console.log(event);
  console.log(e.offsetX);
})

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () =>{
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  console.log("Evento 2");
  e.stopPropagation();
  
});

// const a = document.querySelector("a");

// a.addEventListener("click", (a) => {
//   console.log("Evento 2");
//   e.preventDefault();
//   console.log("Não alterou a página");
// });

// document.addEventListener("keyup", (e) => {
//   console.log(`Soltou a tecla ${e.key}`);
// });

// document.addEventListener("keydown", (e) => {
//   console.log(`Pressionou a tecla ${e.key}`);
// });

// const mouseEvents = document.querySelector("#mouse");
// mouseEvents.addEventListener("mousedown", () => {
//   console.log("Pressionou botão");
// });

// mouseEvents.addEventListener("mouseup", () => {
//   console.log("Soltou botão");
// });

// mouseEvents.addEventListener("dblclick", () => {
//   console.log("Clique duplo");
// });
// window.addEventListener("scroll", (e) => {
//   if (window.scroll > 200) {
//     console.log("Passamos 200px!");
//   }
// });

const dataAtual = new Date();
console.log(dataAtual)

// Obter o dia do mês
const dia = dataAtual.getDate();
console.log(`Dia: ${dia}`); // Saída: 4 (para 4 de abril de 2024)

// Obter o mês (0-11, janeiro = 0)
const mes = dataAtual.getMonth() + 1; // Adicionar 1 para obter o mês normal (1-12)
console.log(`Mês: ${mes}`); // Saída: 4 (para abril)

// Obter ano
const ano = dataAtual.getFullYear(); // Obtem o ano completo
console.log(`Mês: ${mes}`); // Saída: 2024

// Obter a data completa formatada
const dataFormatada = `${dia}/${mes}/${ano}`;
console.log(`Data formatada: ${dataFormatada}`); // Saída: "04/04/2024

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Uva"];

// Encontrar a primeira fruta que começa com "L" usando `find()`
const frutaComL = frutas.find(fruta => fruta.startsWith("L"));
console.log(`Fruta com L: ${frutaComL}`); // Saída: "Laranja"

// Percorrer todas as frutas e imprimir seus nomes usando `forEach()`
frutas.forEach(fruta => console.log(`Nome da fruta: ${fruta}`));

// Mapear as frutas para seus tamanhos (em cm) usando `map()`
const tamanhosFrutas = frutas.map(fruta => fruta.length);
console.log(`Tamanhos das frutas: ${tamanhosFrutas}`); // Saída: [5, 6, 8, 4, 3]

// Juntar os nomes das frutas em uma string usando `join()`
const listaFrutas = frutas.join(", ");
console.log(`Lista de frutas: ${listaFrutas}`); // Saída: "Maçã, Banana, Laranja, Pera, Uva"