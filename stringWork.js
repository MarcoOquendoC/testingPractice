function stringLength(string) {
  const result = string.replaceAll(' ', '');
  if(result.length < 1) return 'input has no characters'
  if(result.length > 10) return 'input too long to be tested'
  return result.length;
}

function reverseString(string) {
  const result = [...string].reverse().join('');
  return result
}

export { stringLength, reverseString }