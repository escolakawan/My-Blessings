// script.js

// Selecionando os elementos do HTML
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Criando as perguntas com enunciado e alternativas
const questions = [
  {
    enunciado: "Qual é o impacto da IA na sociedade?",
    alternativas: ["Positivo", "Negativo"],
  },
  {
    enunciado: "A IA pode substituir totalmente os humanos?",
    alternativas: ["Sim", "Não"],
  },
];

// Adicionando perguntas ao HTML
caixaPerguntas.innerHTML = `<p>${perguntas[0].enunciado}</p>`;
caixaAlternativas.innerHTML = perguntas[0].alternativas
  .map((alt) => `<button>${alt}</button>`)
  .join("");
// script.js

// Selecionando os elementos do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

// Criando a lista de perguntas
const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: ["Isso é assustador!", "Isso é maravilhoso!"],
  },
  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
      "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
    ],
  },
  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
      "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
    ],
  },
  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      "Criar uma imagem utilizando uma plataforma de design como o Paint.",
      "Criar uma imagem utilizando um gerador de imagem de IA.",
    ],
  },
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
      "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
    ],
  },
];

// Variável para rastrear a pergunta atual
let atual = 0;
let perguntaAtual;

// Função para exibir a pergunta na tela
function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = perguntaAtual.alternativas
    .map((alt) => `<button>${alt}</button>`)
    .join("");
}

// Chamando a função para mostrar a primeira pergunta
mostraPergunta();
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}
// script.js

// Selecionando os elementos do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

// Criando a lista de perguntas
const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: ["Isso é assustador!", "Isso é maravilhoso!"],
  },
  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
      "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
    ],
  },
  // Adicione mais perguntas conforme necessário...
];

// Variável para rastrear a pergunta atual e construir a narrativa
let new Promise(function (resolve, reject) {
} 0;
let question;
let historiaFinal = "";

// Função para exibir a pergunta na tela
function mostraPergunta() {
  if (atual < perguntas.length) {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = perguntaAtual.alternativas
      .map((alt, index) => `<button onclick="respostaSelecionada(${index})">${alt}</button>`)
      .join("");
  } else {
    caixaPerguntas.textContent = "Fim da jornada! Aqui está sua história:";
    caixaAlternativas.innerHTML = `<p>${historiaFinal}</p>`;
  }
}

// Função para registrar a resposta escolhida e avançar
function respostaSelecionada(indiceSelecionado) {
// script.js

// Selecionando os elementos do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

// Criando a lista de perguntas
const