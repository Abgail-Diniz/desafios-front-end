//Solicitando para utilizar a biblioteca 'promp-sync' que já foi instalada
//Ela irá ler as entradas de dados
const prompt = require('prompt-sync')();
//Variaveis que irei utilizar no codigo
let sair;
let classificacao = "";
let listClassificacao = []

do {
  const nome = String(prompt("Digite o nome do Heroi: "));
  const experiencia = Number(prompt("Digite o número da XP do seu heroi: "));

  if(experiencia <= 0){
    console.log("Valor Inválido!!!")
    //Pulando para a próxima repetição
    continue;
  }
  
  if(experiencia <= 1000){
    classificacao = "Ferro"
  }else if(experiencia > 1000 && experiencia <= 2000){
    classificacao = "Bronze"
  }else if(experiencia > 2000 && experiencia <= 5000){
    classificacao = "Prata"
  }else if(experiencia > 5000 && experiencia <= 7000){
    classificacao = "Ouro"
  }else if(experiencia > 7000 && experiencia <= 8000){
    classificacao = "Platina"
  }else if(experiencia > 8000 && experiencia <= 9000){
    classificacao = "Ascendente"
  }else if(experiencia > 9000 && experiencia <= 10000){
    classificacao = "Imortal"
  }else{
    classificacao = "Radiante"
  }

  //Armazenando como objeto as variaveis nome e classificacao
  listClassificacao.push({ nome, classificacao });

  sair = Number(prompt("Deseja adicionar mais heróis: 1-(Sim) ou 2-(Não)? "));
} while (sair === 1);

console.log("\nClasificação dos Heróis: \n")
console.log(
  listClassificacao
  //map ->cria um novo array, transformando cada objeto { nome, classificacao } em uma string formatada.
  // h é o nome da variável usada como parâmetro da função
    .map(h => `O Herói de nome: ${h.nome}, está no nível de: ${h.classificacao}`)
  //.join ->junta todos os elementos do novo array de strings em uma única string.
    .join("\n")
);
