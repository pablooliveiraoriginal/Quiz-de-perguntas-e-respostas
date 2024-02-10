const perguntas = [
    {
      pergunta: "Qual é o resultado da expressão '10' + 5?",
      resposta: [
        "105",
        "15",
        "1055",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes é um método que pode ser usado para converter uma string em um número em JavaScript?",
      resposta: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      resposta: [
        "Atribuição",
        "Comparação estrita",
        "Concatenação",
      ],
      correta: 1
    },
    {
      pergunta: "O que a função 'isNaN()' retorna se o argumento não for um número?",
      resposta: [
        "true",
        "false",
        "undefined",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      resposta: [
        "variable x",
        "var x",
        "x = variable",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '5' == 5?",
      resposta: [
        "true",
        "false",
        "undefined",
      ],
      correta: 0
    },
    {
      pergunta: "O que a função 'charAt()' faz em JavaScript?",
      resposta: [
        "Retorna o valor de um caractere em uma posição específica de uma string",
        "Remove espaços em branco de uma string",
        "Converte uma string em letras maiúsculas",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      resposta: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um tipo de dado primitivo em JavaScript?",
      resposta: [
        "array",
        "object",
        "number",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      resposta: [
        "Retorna verdadeiro se ambos os operandos forem verdadeiros",
        "Retorna verdadeiro se um dos operandos for verdadeiro",
        "Retorna verdadeiro se ambos os operandos forem falsos",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h2').textContent = item.pergunta
  
  for(let resposta of item.resposta){
  const dt = quizItem.querySelector ('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.resposta.indexOf(resposta)
  dt.querySelector('input').onechange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if (estaCorreta) {
      corretas.add(item)
  
    }
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
  
    quiz.appendChild(quizItem)
  }