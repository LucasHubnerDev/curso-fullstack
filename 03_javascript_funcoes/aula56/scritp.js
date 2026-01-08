// ======================================================
// Factory Function (Função Fábrica)
// ------------------------------------------------------
// Uma Factory Function é usada para criar e retornar
// objetos de forma padronizada, sem usar class ou new.
// Ela facilita reutilização, encapsulamento e leitura.
// ======================================================

function createPerson(name, surname, age, sexo) {
  return {
    // Gera um identificador único para cada pessoa
    id: crypto.randomUUID(),

    // Propriedades públicas
    name,
    surname,
    age,
    sexo,

    // --------------------------------------------------
    // Getter: permite acessar "fullName" como propriedade
    // (pessoa.fullName), mas executa uma função por trás
    // --------------------------------------------------
    get fullName() {
      return `${this.name} ${this.surname}`;
    },

    // --------------------------------------------------
    // Setter: permite atribuir um valor a "fullName"
    // e automaticamente atualizar name e surname
    // --------------------------------------------------
    set fullName(value) {
      const partes = value.split(" ");
      this.name = partes.shift();        // primeiro nome
      this.surname = partes.join(" ");   // resto vira sobrenome
    },

    // Método do objeto
    fala() {
      return `My name is ${this.fullName} and I'm ${this.age} years old.`;
    },

    // Exemplo de getter para valor calculado
    // (aqui está só ilustrativo)
    get imc() {
      return "imc";
    }
  };
}

// ======================================================
// Uso da Factory Function
// ======================================================

const p1 = createPerson("Yasmin", "Santino", 18, "F");

// Chamando método
console.log(p1.fala());

// Usando o setter (parece uma atribuição comum)
p1.fullName = "Janny Victoria Santos";

// Usando getter
console.log(p1.imc);

// Exibindo o objeto completo
console.log(p1);
