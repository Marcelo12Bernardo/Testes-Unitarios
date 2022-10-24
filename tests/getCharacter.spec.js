/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    expect(getCharacter()).toBeUndefined();
    expect(getCharacter('Arya')).toEqual(expectedOutput('Arya'));
    expect(getCharacter('Brienne')).toEqual(expectedOutput('Brienne'));
    expect(getCharacter('Melissandre')).toEqual(expectedOutput('Melissandre'));
    expect(getCharacter('MeLiSsAnDrE')).toEqual(expectedOutput('Melissandre'));
    expect(getCharacter('Marcelo')).toBeUndefined();
  });
});
const expectedOutput = (name) => {
  let expectedOutput = {
    name: '',
    class: '',
    phrases: []
  };

  switch (name) {
    case "Arya":
      expectedOutput = {
        name: 'Arya Stark',
        class: 'Rogue',
        phrases: [ 'Not today', 'A girl has no name.' ]
      };
      return expectedOutput;
      
      case "Brienne":
        expectedOutput = {
          name: 'Brienne Tarth',
          class: 'Knight',
          phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
        };
        return expectedOutput;

        case "Melissandre":
        expectedOutput = {
          name: 'Melissandre',
          class: 'Necromancer',
          phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']
        };
        return expectedOutput;
      default:
        break;
  }
}
