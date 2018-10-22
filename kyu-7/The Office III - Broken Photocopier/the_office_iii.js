function broken(x){
  return x.replace(/1/g, 'one').replace(/0/g, '1').replace(/one/g, 0);
}
