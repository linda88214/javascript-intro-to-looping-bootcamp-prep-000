

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
