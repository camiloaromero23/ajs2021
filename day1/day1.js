/**
 * @param {Array<{name:string,color}>} ovejas
 */
function contarOvejas(ovejas) {
  // aquí tu magia
  return ovejas
    .filter((o) => o.color === 'rojo')
    .filter(({ name }) => {
      name = name.toLowerCase();
      return name.includes('n') && name.includes('a');
    });
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
];
const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
