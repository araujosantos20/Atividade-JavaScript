// Atividade 1
const saudacaoPersonalizada = (nome) => {
  return `Seja bem-vindo ${nome} ao seu curso, escolha o que queira estudar.`;
};

console.log(saudacaoPersonalizada("Mateus"));

// Atividade 2

const verificacaoIdade = function (idade) {
  if (idade < 18) {
    return `Você não tem autorização para fazer cadastro.`;
  } else {
    return `Seja bem-vindo, cadastre-se aqui para uma melhor experiência.`;
  }
};

console.log(verificacaoIdade(18));

// Atividade 3

const reverso = (frase) => {
  // O JavaScript não tem permissão para modificar diretamente uma string
  // Então para eu fazer ele ler uma string de trás para frente, precisei
  // Primeiro dividir essa string em vários arrays utilizando split. Depois
  // Mudei os arrays de posição utilizando reverse, e para voltar a ser uma
  // String novamente, utilizei o join para juntar todos os arrays em uma
  // String apenas.
  inverso = frase.split("").reverse().join("");
  console.log(inverso);
  if (frase === inverso) {
    return true;
  } else {
    return false;
  }
};

console.log(reverso("sofia"));

// Atividade 4

const maiorNumero = (primeiro, segundo, terceiro) => {
  if (primeiro > segundo && primeiro && terceiro) {
    return primeiro;
  } else if (segundo > primeiro && segundo > terceiro) {
    return segundo;
  } else if (terceiro && primeiro && terceiro > segundo) {
    return terceiro;
  } else {
    return `Isto não é um número ou os números estão iguais`;
  }
};

console.log(maiorNumero(25, 30, 19));

// Atividade 5

const calcularPotencia = (base, expoente) => {
  potencia = base ** expoente;
  return potencia;
};

console.log(calcularPotencia(2, 4));
