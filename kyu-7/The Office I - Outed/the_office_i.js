function outed(meet, boss){
  return Object.keys(meet).reduce((score, person) => score += person === boss ? meet[person] * 2 : meet[person], 0) / Object.keys(meet).length <= 5 ?
           'Get Out Now!' : 'Nice Work Champ!';
}
