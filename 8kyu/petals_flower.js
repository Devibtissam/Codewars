function howMuchILoveYou(nbPetals) {
  // your code
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];

  return phrases[(nbPetals - 1) % 6];
}
