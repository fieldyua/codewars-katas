function meeting(x, need){
  if (!need) return 'Game On';

  let chairs = x.map(
    room =>
      room[1] >= room[0].length ?
        room[1] - room[0].length : 0
  );

  let result = [];
  let sum = 0;
  for (let i = 0; i < chairs.length; i++) {
    sum += chairs[i];
    if (sum < need) {
      result.push(chairs[i]);
    } else if (sum === need) {
      result.push(chairs[i]);
      break;
    } else {
      result.push(need - sum + chairs[i]);
      break;
    }
  }
 
  return sum < need ? 'Not enough!' : result;
}
