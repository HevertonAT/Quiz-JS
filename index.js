const perguntas = [
  {
    pergunta: "Qual é a maneira correta de se declarar uma variável em JavaScript?",
    respostas: [
      "var myVar;",
      "variable myVar;",
      "variável myVar;"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '2' + 2?",
    respostas: [
      "4",
      "22",
      "Erro"
    ],
    correta: 1
  },
  {
    pergunta: "Qual dessas opções não é um tipo de dado primitivo em JavaScript?",
    respostas: [
      "number",
      "object",
      "boolean"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a maneira correta de se comentar uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "'Este é um comentário'",
      "<!-- Este é um comentário -->"
    ],
    correta: 0
  },
  {
    pergunta: "O que o operador '===' faz em JavaScript?",
    respostas: [
      "Compara valores e tipos de dados",
      "Compara apenas valores",
      "Compara apenas tipos de dados"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função utilizada para arredondar um número para o inteiro mais próximo em JavaScript?",
    respostas: [
      "Math.ceil()",
      "Math.floor()",
      "Math.round()"
    ],
    correta: 2
  },
  {
    pergunta: "O que o operador '&&' faz em JavaScript?",
    respostas: [
      "Operador de OU",
      "Operador de Negação",
      "Operador de E lógico"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o resultado da expressão '10' == 10?",
    respostas: [
      "true",
      "false",
      "Erro"
    ],
    correta: 0
  },
  {
    pergunta: "O que a função 'parseInt()' faz em JavaScript?",
    respostas: [
      "Analisa uma string e retorna um número inteiro",
      "Arredonda um número para o inteiro mais próximo",
      "Retorna o valor absoluto de um número"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de se escrever um loop 'for' em JavaScript?",
    respostas: [
      "para (var i = 0; i < 10; i++)",
      "para (i = 0; i < 10; i++)",
      "para (i = 0; i <= 10)"
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#Acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    
  }

quizItem.querySelector('dl').appendChild(dt)
}


quizItem.querySelector('dl dt').remove()


//coloca a pergunta na tela
quiz.appendChild(quizItem)
}
