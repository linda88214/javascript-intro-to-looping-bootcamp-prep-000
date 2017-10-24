function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i===1) {
      return "I am 1 strange loop"
    } else {
      array.push('I am ${1} strange loop ${i===0 ? \'\' : \'s\'}.')
    }
  }
  return array.push
}

function whileLoop(n) {
  while (n > 0) {
    console.log (--n)
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array.pop();
    return array;
  } while (array.length > 0 && maybeTrue() );
}
