module.exports = function reverse (n) {
  let buff = [];
  let calc = 0;
  let res = '';
  let currNum = Math.abs(n);
  do{
      let num = Math.floor(currNum / 10);
      let diff = currNum - num * 10;
      buff[calc++] = diff;
      currNum = num;
  } while (currNum > 0);
    for (let i = 0; i < buff.length; i++) {
        res += buff[i];
    }
  return parseInt(res);
}
