class Form {
  constructor() {
    this.formulario = document.querySelector("#formulario")

    this.inputs = {
      nome: document.querySelector("#nome"),
      sobrenome: document.querySelector("#sobrenome"),
      email: document.querySelector("#email"),
      usuario: document.querySelector("#nome-usuario"),
      senha: document.querySelector("#senha"),
      confirmarSenha: document.querySelector("#confirmar-senha"),
      cpf: document.querySelector("#cpf"),
      check: document.querySelector("#robot"),
    }

    this.init()
  }

  init() {
    this.formulario.addEventListener("submit", (e) => this.handleForm(e))

    this.inputs.cpf.addEventListener("input", () => {
      this.inputs.cpf.value = this.inputs.cpf.value.replace(/\D+/g, "")
    })

    this.inputs.nome.addEventListener("input", () => {
      this.inputs.nome.value = this.inputs.nome.value.replace(/[^\p{L}\s]/gu, "")
    })

    this.inputs.sobrenome.addEventListener("input", () => {
      this.inputs.sobrenome.value = this.inputs.sobrenome.value.replace(/[^\p{L}\s]/gu, "")
    })
  }

  handleForm(e) {
    e.preventDefault()

    if (this.checkFields()) {
      console.log("Formulário válido")
    }
  }

  checkFields() {
    document.querySelectorAll(".form-text.text-danger").forEach(div => div.remove())

    let isValid = true

    for (const key in this.inputs) {
      // continue para pular o loop atual
      if (key === "check") continue

      if (!this.inputs[key].value) {
        this.createError(key, "não pode estar vazio")
        isValid = false
      }
    }

    if (!this.inputs.check.checked) {
      this.createError("check", "você precisa confirmar")
      isValid = false
    }

    if (!Cpf.validar(this.inputs.cpf.value)) {
      this.createError("cpf", "inválido")
      isValid = false
    }
   
    const senha = this.inputs.senha.value
    const confirmarSenha = this.inputs.confirmarSenha.value

    if (senha !== confirmarSenha) {
      this.createError("senha", "não confere")
      this.createError("confirmarSenha", "não confere")
      isValid = false
    }

    const usuario = this.inputs.usuario.value

    if (usuario.length < 6 || usuario.length > 12) {
      this.createError("usuario", "precisa ter entre 6 e 12 caracteres")
      isValid = false
    }


    if (senha.length < 6 || senha.length > 12) {
      this.createError("senha", "precisa ter entre 6 e 12 caracteres")
      isValid = false
    }


    if (confirmarSenha.length < 6 || confirmarSenha.length > 12) {
      this.createError("confirmarSenha", "precisa ter entre 6 e 12 caracteres")
      isValid = false
    }

    if (!/^[a-zA-Z0-9]+$/.test(usuario)) {
      this.createError("usuario", "só pode conter letras e números")
      isValid = false
    }

    return isValid
  }

  createError(key, msg) {
    const div = document.createElement("div")
    div.className = "form-text text-danger"
    div.textContent = `* ${msg}`
    this.inputs[key].insertAdjacentElement("afterend", div)
  }
}

new Form()
