# 📄 Documentação Técnica – Calculadora

Este é um projeto funcional de uma calculadora básica desenvolvida com **HTML**, **CSS** e **JavaScript puro.**  
Permite ao usuário realizar operações matemáticas simples (adição, subtração, multiplicação e divisão) diretamente no navegador, sem necessidade de bibliotecas externas.



## ⚙️ Tecnologias Utilizadas:  

| Tecnologia | Finalidade                   |
|------------|------------------------------|
| HTML5      | Estrutura da página          |
| CSS3       | Estilização da interface     |
| JavaScript | Lógica e interatividade      |



## 🧱 Componentes do Projeto:  

- `<input id="display">` – Campo onde a expressão e o resultado são exibidos.  
- `<button>` – Botões numéricos, operacionais e de controle.  
- `.calculadora` – Container principal do layout da calculadora.  
- `.botoes` – Grade que organiza os botões em linhas e colunas.  

### Funções JavaScript:

- `adicionarNumero()` – Adiciona o número pressionado ao display.  
- `adicionarOperacao()` – Insere o operador escolhido com espaços.  
- `adicionarPonto()` – Adiciona o ponto decimal, se ainda não estiver presente.  
- `limpar()` – Limpa completamente o conteúdo do display.  
- `calcular()` – Avalia a expressão matemática e exibe o resultado, ou "Erro" se inválida.


### Objetivo  
Construir uma calculadora funcional com interface intuitiva, utilizando apenas tecnologias básicas de front-end.  
O foco está no reforço da manipulação de DOM, interatividade com eventos e estilo responsivo.



## 🧩 Desafios Enfrentados:  

| Desafio                                                   | Solução Aplicada                                                         |
|-----------------------------------------------------------|--------------------------------------------------------------------------|
| Criar e organizar os botões de forma responsiva           | Uso de CSS Grid e estilização com bordas, cores e animações.             |
| Evitar múltiplos pontos na mesma operação                 | Função `adicionarPonto()` com verificação de existência.                 |
| Avaliar expressões matemáticas complexas                  | Utilização de `eval()` dentro de `try...catch` para tratamento de erros. |
| Manter visual agradável e moderno                         | Uso de cores contrastantes, sombras e transições suaves no CSS.          |


