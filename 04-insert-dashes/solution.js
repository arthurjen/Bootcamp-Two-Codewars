function insertDash(num) {
  const number = num.toString().split('');
  for(let i = 1; i < number.length; i++) {
    if(number[i] % 2 === 1 && number[i - 1] % 2 === 1) {
        number.splice(i, 0, '-');
    }
  }
  return number.join('');
}