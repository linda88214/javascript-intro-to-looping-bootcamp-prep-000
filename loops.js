

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      return "I am" + i + "strange loop"
    } else {
      return "I am ${i} strange loops"
    };
  };
};

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
