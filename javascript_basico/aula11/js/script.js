// comandos do navegador, ficam dentro do objeto window

// window.alert() -> apenas um pop-up -> retorna undefined
// alert("menssage")

// window.confirm() -> pode ser usado para confirmar alguma ação, retorna valores lógicos
// confirm("confirmar")

// window.prompt() -> mini formulário -> me retorna o valor digitado pelo usuário
// prompt("seu nome")

// posso guardar o retorno dentro de uma variável
const nomeUsuario = prompt("qual o seu nome")
console.log(`${nomeUsuario} entrou no seu site`)