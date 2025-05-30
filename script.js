/*
    OBJETO
    - Uma coleção de dados e/ou funcionalidades;
    - Pode ter propriedades e métodos.
*/

// Cria um objeto vazio.

const obj = {};
console.log(obj);
console.log(typeof obj);

// Cria um objeto com propriedades de métodos.

const user = {
  email: "jonasrpnstudy@gmail.com", // Usamos os dois pontos : para atribuição dentro dos objetos, diferentemente do = que usamos fora para atribuição de variáveis
  age: 26,
  name: {
    firt_name: "Jonas",
    surname: "Rocha",
    // Posso ter um objeto dentro de um outro objeto.
  },
  address: {
    street: "Rua X",
    number: 160,
    city: "São Paulo",
    postal_code: "12345-123",
  },
  message: () => {
    console.log("Oi Jonas");
  },
};

// Acessando propriedades e metodos usando a notação de ponto.

console.log(user.email);

// Acessando propriedade de objetos.
console.log(user.name.surname);

// Executa o método do objeto.
user.message();

// Notação de colchetes
console.log(user["email"]);
console.log(user["name"]["firt_name"]);
user["message"]();
