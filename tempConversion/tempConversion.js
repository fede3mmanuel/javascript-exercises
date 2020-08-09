const ftoc = function(Fnumber) {

  let result = (Fnumber - 32) * (5/9);

  if (Number.isInteger(result)) {
    return result;
  } else {
    return Number(result.toFixed(1))
  }
  

}

const ctof = function(Cnumber) {

  let result = (Cnumber * (9/5)) + 32;

  if (Number.isInteger(result)) {
    return result;
  } else {
    return Number(result.toFixed(1))
  }
  
}

module.exports = {
  ftoc,
  ctof
}
