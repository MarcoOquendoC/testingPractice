function stringLength(string) {
  let result = string.replaceAll(' ', '');
  if(result.length < 1) return 'input has no characters'
  if(result.length > 10) return 'input too long to be tested'
  return result.length;
}

export default stringLength