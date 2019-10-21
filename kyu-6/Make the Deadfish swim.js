function parse(data){
  let n = 0;
  let result = [];
  let arr = data.split('');
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'i') n++;
    else if (arr[i] == 'd') n--;
    else if (arr[i] == 's') n *= n;
    else if (arr[i] == 'o') result.push(n);
  }
  return result;
}
