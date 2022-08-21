const operations = {
  add(a, b) { return a+b; },
  substract(a, b) { return a-b; },
  divide(a, b) { return b!=0? a/b: 'Error: Second Argument could not be zero'; },
  multiply(a, b) { return a*b; }
}

export { operations };