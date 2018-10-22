function boredom(staff){
  let score = Object.keys(staff).reduce((score, current) => score += boredomScore[staff[current]], 0);
  return score <= 80 ?
           'kill me now' : score < 100 ?
             'i can handle this' : 'party time!!';
}

const boredomScore = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  'pissing about': 25
};
