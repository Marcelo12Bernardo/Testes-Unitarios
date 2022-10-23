const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(typeof productDetails('banana','laranja')).toBe('object');
    expect(productDetails('banana','laranja').length).toBe(2);
    expect(typeof Object.values(productDetails('banana','laranja'))).toBe('object');
    expect( productDetails('banana','laranja')[0] !== productDetails('banana','laranja')[1]).toBeTruthy();
    expect( verificFinal(productDetails('banana','laranja')[0]) && verificFinal(productDetails('banana','laranja')[1]) === '123').toBeTruthy();
  });

  
});
const verificFinal = (value) => {
  let string = value.details.productId;
  return string.slice(string.length - 3);
}