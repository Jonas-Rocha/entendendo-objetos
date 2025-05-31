/*
    OBJETO
    - Uma coleção de dados e/ou funcionalidades;
    - Pode ter propriedades e métodos.


    lembrando que os dois pontos : substituem o sinal de igual = dentro de um objeto.
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

const usuario = {
  name: "João",
  email: "jonasrpnstudy@gmail.com",
  message: function () {
    // console.log(`Olá ${usuario.name}`);
    console.log(`Olá ${this.email}`); //O THIS NÃO FUNCIONA COM ARROW FUNCION.
  },
  //tentar acostumar a usar função anonima dentro de objetos, pois o "this" não funciona com arrow funcion por algum motivo irrelevante.
};

usuario.message();

const product = {
  name: "Teclado",
  quantity: 100,
};

// Acessando a propriedade do objeto.
console.log(product.name);

// Atualiza o valor de uma propriedade.
console.log(product.quantity); // exibindo antes de atualizar.
product.quantity = 90; // ATUALIZANDO...
console.log(product.quantity); // exibindo depois de atualizar.

console.log(product.name); // exibindo antes de atualizar.
product.name = "Mouse"; // ATUALIZANDO...
console.log(product.name); // exibindo depois de atualizar.

// Notação de colchetes
console.log(product["quantity"]); // exibindo antes de atualizar.
product["quantity"] = 50; // ATUALIZANDO...
console.log(product["quantity"]); // exibindo depois de atualizar.
console.log(product);

/*
    OPTIONAL CHAINING (?.) - encadeamento opcional
    Se a propriedade ou função chamada é nullish 
    (null or undefined), a expressão retorna 
    undefined em vez de gerar um erro.

    Útil ao explorar o conteúdo de um objeto 
    quando não existe garantia da existência de 
    determinadas propriedades obrigatórias.

        Por exemplo, para verificar se um usuário 
    possui uma foto opcional:
    user?.foto

    Isso evita erro caso o objeto 'user' ou a 
    propriedade 'foto' não existam.
*/

const userChaining = {
  id: 1,
  name: "jonas",
  /*
  address: {
    street: "Avenida Brasil",
    city: "São Paulo",
    geo: {
      latitude: 47.808,
      longitude: 17.5674,
    },
  }, */
  /*
  message: function () {
    console.log(`Olá ${this.name} `);
  },*/
};
console.log(userChaining?.address);
console.log(userChaining?.address?.street);

userChaining.message?.();

/*
OPERADOR DE COALESCÊNCIA NULA (??)
Operador lógico que retorna o seu operando do 
lado direito quando o seu operador do lado 
esquerdo é null ou undefined. Caso contrário, 
ele retorna o seu operando do lado esquerdo.
*/

let content = null;

// Só funciona com NULL e UNDEFINED
console.log(content ?? "Conteúdo padrão");
// const userCoalecencia = {
//   name: "Jonas",
//   picture: undefined,
// };

// console.log(userCoalecencia.picture ?? "default.png");

// Forma de criar explicitamente oobjeto  e sua propriedades dentro de sua função construtoras.
function createProduct(name) {
  const product1 = {};

  product1.name = name;
  product1.details = function () {
    console.log(`O nome do produto é ${this.name}`);
  };
  return product1;
}

// O new cria um novo objeto utilizando a estrutura da função construtora.
const product2 = new createProduct("Teclado");
console.log(product2.name);
product2.details();

const product3 = new createProduct("Mouse");
console.log(product3.name);
product3.details();

// console.log(product2 === product3);

// Exemplos de funções construtoras disponíveis no próprio Javascript.

let myName = new String("Jonas");
console.log(myName);

let price = "40.6".replace(".", "");
console.log(price);

let date = new Date("2025-1-1");
console.log(date);

// Forma mais parecida com declaração de classes
function Person(name) {
  this.name = name;
  this.message = function () {
    console.log(`Olá, ${this.name}`);
  };
}

const person1 = new Person("Jonas");
console.log(person1.name);
person1.message();

const person2 = new Person("Andressa");
console.log(person2.name);
person2.message();

/* Isso tudo é muito importante para aprender o que acontece por "baixo dos panos"
quando utilizamos um método pronto do javascript, e também
como fazemos para criar nossas proprias funções para modificar dinamicamente os nossos
objetos. */
