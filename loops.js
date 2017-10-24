for (let i = 1; i < 26; i++) {
  console.log("I am" + i + "strange loops");
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
