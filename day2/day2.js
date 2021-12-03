const gifts = {};
/**
 * @param {string} letter
 */
function listGifts(letter) {
  // ¡Tú puedes!
  letter = letter.trim();
  let giftsArr = letter.split(' ');
  giftsArr = giftsArr.filter((g) => !g.startsWith('_'));
  giftsArr.forEach(addGift);

  return gifts;
}

/**
 * @param {string} gift
 */
const addGift = (gift) => {
  if (gifts[gift]) {
    gifts[gift]++;
  } else {
    gifts[gift] = 1;
  }
};

const carta = 'bici coche balón _playstation bici coche peluche';

const regalos = listGifts(carta);

console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
